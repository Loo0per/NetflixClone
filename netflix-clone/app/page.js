import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ReasonRow from '../components/ReasonRow';

export default async function Home() {
  // Dynamically determine the base URL for both local and production
  const baseUrl = typeof window === 'undefined'
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
    : '';

  let movies = [];
  try {
    const response = await fetch(`${baseUrl}/api/movies`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch');
    movies = await response.json();
  } catch (error) {
    movies = [];
  }

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