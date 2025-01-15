import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../util/moviesSlice";
import { API_OPTIONS } from "../util/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS);
        console.log("data===>", data)
        const json = await data.json();
        console.log(json);
        const trailerData = json.results.filter(video => video.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        console.log(trailer)
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

}

export default useMovieTrailer;