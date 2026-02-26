import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MediaList from "./components/MediaList";
import { fetchAnimeFromJikan, fetchGamesFromRAWG } from "./requests/Fetch";

function App() {
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState("anime");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    let data = [];

    if (searchType === "anime") {
      data = await fetchAnimeFromJikan(query);
    } else {
      data = await fetchGamesFromRAWG(query);
    }

    setResults(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold mb-8">Lit🔥</h1>
        <h2 className="text-xl mb-8 text-center text-neutral-500" >Track and rate all your movies, games, anime, and books in one place, <br/> like Backloggd × Letterboxd × MyAnimeList.</h2>
      <SearchBar
        onSearch={handleSearch}
        searchType={searchType}
        setSearchType={setSearchType}
      />

      <MediaList
        results={results}
        loading={loading}
        searchType={searchType}
      />
    </div>
  );
}

export default App;