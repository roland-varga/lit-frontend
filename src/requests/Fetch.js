export async function fetchAnimeFromJikan(animeName) {
    try {
        const response = await fetch(
            `https://api.jikan.moe/v4/anime?q=${animeName}&limit=5`
        );

        const data = await response.json();
        return data.data;
        
    } catch (error) {
        console.error("Error fetching anime:", error);
        return [];
    }
}


export async function fetchGamesFromRAWG(gameName) {
    try {
        const response = await fetch(
            `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${gameName}&page_size=5`
        );

        const data = await response.json();
        return data.results; // only return the games array
    } catch (error) {
        console.error("Error fetching games:", error);
        return [];
    }
}