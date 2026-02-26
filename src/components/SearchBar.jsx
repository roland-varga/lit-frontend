import { useState } from "react";

export default function SearchBar({ onSearch, searchType, setSearchType }) {
  const [query, setQuery] = useState("");

  const placeholderText =
    searchType === "anime" ? "Search anime..." : "Search games...";

  return (
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
        onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
      />

      <button
        onClick={() => onSearch(query)}
        className="px-5 py-3 bg-emerald-500 hover:bg-emerald-700 rounded-r-xl font-medium transition"
      >
        GO
      </button>
    </div>
  );
}