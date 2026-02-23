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
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>GO!</button>

            <div className="row">
                {results.map((anime) => (
                    <div key={anime.mal_id} className="result">
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