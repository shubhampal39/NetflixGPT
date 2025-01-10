import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../util/constant'

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1", options
    );
    const movies = await data.json();
    console.log(movies.results);
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <div>
      <Header />
      <h1>Browse</h1>
    </div>
    // <div className='className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    //   <img className="w-44" src={LOGO} alt="Logo" />
    //   <div className='flex p-2'>
    //     <img w-12 h-12 src={USER_AVATAR} alt='avtar logo' />
    //     <button className='font-bold text-white cursor-pointer' onClick={handleSignOut}>(Sign Out)</button>
    //   </div>
    // </div>
  )
}

export default Browse