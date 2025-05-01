import Image from 'next/image';

export default function MovieCard({ movie }) {
  return (
    <div className="w-48 flex-shrink-0 transform transition duration-300 hover:scale-105">
      <Image
        src={movie.poster}
        alt={movie.title}
        width={192}
        height={288}
        className="rounded"
      />
      <p className="text-white mt-2 truncate">{movie.title}</p>
    </div>
  );
}