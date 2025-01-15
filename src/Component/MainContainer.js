import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    console.log(movies);
    if (!movies) return;

    const mainMovie = movies[0];
    // const [original_title, overview] = mainMovie;
    const original_title = mainMovie.original_title;
    const overview = mainMovie.overview;
    const id = mainMovie.id;
    console.log(original_title, overview)

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer