import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ReasonRow from '../components/ReasonRow';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = host && host.startsWith('localhost') ? 'http' : 'https';
  const baseUrl = host ? `${protocol}://${host}` : '';

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