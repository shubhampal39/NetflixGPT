import { API_OPTIONS } from '../util/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../util/moviesSlice'
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS
        );
        const movies = await data.json();
        console.log(movies.results);
        dispatch(addNowPlayingMovies(movies.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}



export default useNowPlayingMovies;

