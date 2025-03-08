import Image from "next/image";

export default async function MoviePage({ params }) {
  const { id } = params; // ❌ No need to await params
  if (!id) {
    return <div className="text-red-500">Invalid Movie ID</div>;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    return <div className="text-red-500">Movie not found.</div>;
  }
  const movie = await res.json();
  console.log(movie);
  const percentage = (movie.vote_average / 10) * 100;

  return (
    <div className="w-full relative">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>{" "}
        {/* Overlay for 20% transparency */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={300}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          alt={movie.title || "Movie Poster"}
        />

        <div className="p-2">
          <h2 className="text-2xl font-bold text-black mb-3">
            {movie.title || movie.name}
            {movie.release_date || movie.first_air_date
              ? ` (${(movie.release_date || movie.first_air_date).slice(0, 4)})`
              : ""}
          </h2>
          <div className="text-black flex items-center gap-3">
            <span>{movie.release_date}</span>
            <span>({movie.origin_country})</span>
            <span>
              {movie.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < movie.genres.length - 1 && ", "}
                </span>
              ))}
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-black">Overview</h2>
          <p className="text-lg text-black mb-3">{movie.overview}</p>

          <p className="mb-3 text-black">
            <span className="font-semibold text-black mr-1">Rating:</span>
            {movie.vote_count} votes ({percentage.toFixed(1)}%)
          </p>
        </div>
      </div>
    </div>
  );
}
