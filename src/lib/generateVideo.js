const { default: axios } = require("axios");

export const generateVideo = async (query) => {
    console.log("Raw query:", query);
    try {
        const encodedQuery = encodeURIComponent(query);
        console.log(query);
        const { data, status } = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&q=${encodedQuery}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=2`
        );

        if (status !== 200 || !data || !data.items || data.items.length === 0) {
            console.log("YouTube API returned no results.");
            return null;
        }

        return data.items[0]?.id?.videoId || null;
    } catch (error) {
        console.log("Error in generating video URL:", error.message);
        return null;
    }
};
