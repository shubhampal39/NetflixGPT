import React from 'react'
import { LOGO, USER_AVATAR } from '../util/constant'
import { signOut } from "firebase/auth";
import { auth } from '../util/firebase';
import { useNavigate } from 'react-router-dom';


const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("sdds")
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });

  }

  return (
    <div className='className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src={LOGO} alt="Logo" />
      <div className='flex p-2'>
        <img w-12 h-12 src={USER_AVATAR} alt='avtar logo' />
        <button className='font-bold text-white cursor-pointer' onClick={handleSignOut}>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Browse