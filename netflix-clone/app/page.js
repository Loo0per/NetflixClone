import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ReasonRow from '../components/ReasonRow';

export default async function Home() {
  // Determine the base URL for server-side fetching
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  // Fetch data from the mock API route
  const response = await fetch(`${baseUrl}/api/movies`, {
    cache: 'no-store', // Disable caching for this request
  });
  const movies = await response.json();

  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <div className="ml-20">
  <MovieRow title="Trending Now" movies={movies} />
</div>
      <ReasonRow title="More Reasons to Join"/>
      <FAQ />
      <Footer />
    </div>
  );
}