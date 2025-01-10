import React, { useEffect } from 'react'
import { LOGO, USER_AVATAR } from '../util/constant'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../util/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../util/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscibed when compnent unmount
    return () => unsubscribe();
  },

    [])

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