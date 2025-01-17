import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
    // <div className='className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    //   <img className="w-44" src={LOGO} alt="Logo" />
    //   <div className='flex p-2'>
    //     <img w-12 h-12 src={USER_AVATAR} alt='avtar logo' />
    //     <button className='font-bold text-white cursor-pointer' onClick={handleSignOut}>(Sign Out)</button>
    //   </div>
    // </div>
  );
};

export default Browse;
