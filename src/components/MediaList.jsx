export default function MediaList({ results, loading, searchType }) {
  return (
    <div className="w-full max-w-3xl mt-6">
      {loading && <p className="text-neutral-400 mb-4">Loading...</p>}

      {searchType === "games" &&
        results.map((game) => (
          <div key={game.id} className="mb-6">
            <h3 className="text-lg font-semibold">{game.name}</h3>
            {game.background_image && (
              <img
                src={game.background_image}
                alt={game.name}
                className="w-40 rounded-lg"
              />
            )}
            <p className="text-sm text-neutral-400">{game.released}</p>
          </div>
        ))}

      {searchType === "anime" &&
        results.map((anime) => (
          <div key={anime.mal_id} className="mb-6">
            <h3 className="text-lg font-semibold">{anime.title}</h3>
            {anime.images?.jpg?.image_url && (
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-40 rounded-lg"
              />
            )}
            <p className="text-sm text-neutral-400">{anime.year}</p>
          </div>
        ))}
    </div>
  );
}