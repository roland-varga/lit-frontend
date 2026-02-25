import React, { useState } from "react";
import { fetchAnimeFromJikan, fetchGamesFromRAWG } from "../requests/Fetch";
import "../App.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState("anime"); // 'anime' or 'games'
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    let data = [];

    if (searchType === "anime") {
      data = await fetchAnimeFromJikan(query);
    } else if (searchType === "games") {
      data = await fetchGamesFromRAWG(query);
    }

    setResults(data);
    setLoading(false);
  };

  // Dynamic placeholder
  const placeholderText = searchType === "anime" ? "Search anime..." : "Search games...";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Bar + Dropdown */}
      <div className="flex w-full max-w-3xl mb-4">
        <select
          className="px-4 py-3 bg-neutral-900 border border-neutral-700 text-neutral-100 rounded-l-xl focus:outline-none focus:border-emerald-700"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="anime">Anime</option>
          <option value="games">Games</option>
        </select>

        <input
          className="flex-1 px-4 py-3 bg-neutral-900 border-t border-b border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-700 transition"
          type="text"
          placeholder={placeholderText}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
        />

        <button
          onClick={handleSearch}
          className="px-5 py-3 bg-emerald-500 hover:bg-emerald-700 rounded-r-xl font-medium transition"
        >
          GO
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-neutral-400 mb-4">Loading...</p>}

      {/* Results */}
      <div className="w-full max-w-3xl mt-6">
        {results.length === 0 && !loading && <p className="text-neutral-500">No results found.</p>}

        {searchType === "games" && results.map((game) => (
          <div key={game.id} className="mb-6">
            <h3 className="text-lg font-semibold">{game.name}</h3>
            {game.background_image && (
              <img src={game.background_image} alt={game.name} className="w-40 rounded-lg" />
            )}
            <p className="text-sm text-neutral-400">{game.released}</p>
          </div>
        ))}

        {searchType === "anime" && results.map((anime) => (
          <div key={anime.mal_id} className="mb-6">
            <h3 className="text-lg font-semibold">{anime.title}</h3>
            {anime.images?.jpg?.image_url && (
              <img src={anime.images.jpg.image_url} alt={anime.title} className="w-40 rounded-lg" />
            )}
            <p className="text-sm text-neutral-400">{anime.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}