import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  return (
    <div className="bg-black text-white px-4 py-8 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">{title}</h2>
      <div className="flex space-x-10 overflow-x-auto scrollbar-hide ml-25">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}