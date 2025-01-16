import { API_OPTIONS } from "../util/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../util/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const movies = await data.json();
    console.log(movies.results);
    dispatch(addPopularMovies(movies.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
