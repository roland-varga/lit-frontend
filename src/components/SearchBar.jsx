import React, { useState } from "react";
import "../App.css"

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime?q=${query}&limit=5`
            );

            const data = await response.json();
            setResults(data.data); // Jikan puts results inside data.data
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };

return (
    <div className="w-full flex flex-col items-center">
        <div className="flex w-full max-w-3xl">
            <input
                className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 
                           rounded-l-xl text-neutral-100 placeholder-neutral-500
                           focus:outline-none focus:border-emerald-700 transition"
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button
                onClick={handleSearch}
                className="px-5 py-3 bg-emerald-500 hover:bg-emerald-700
                           rounded-r-xl font-medium transition"
            >
                GO
            </button>
        </div>

        <div className="w-full max-w-3xl mt-6">
            {results.map((anime) => (
                <div key={anime.mal_id} className="mb-4">
                    <h3>{anime.title}</h3>
                    <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        width="100"
                    />
                    <p>{anime.year}</p>
                </div>
            ))}
        </div>
    </div>
);
}