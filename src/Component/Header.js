import React from 'react'
import { LOGO, USER_AVATAR } from '../util/constant'
import { signOut } from "firebase/auth";
import { auth } from '../util/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });

  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (<div className='flex p-2'>
        <img className="w-12 h-12" src={user?.photoURL} alt='avtar logo' />
        <button className='font-bold text-white cursor-pointer' onClick={handleSignOut}>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header