import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ReasonRow from '../components/ReasonRow';

export default async function Home() {
  // Fetch data from the mock API route
  const response = await fetch('http://localhost:3000/api/movies', {
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