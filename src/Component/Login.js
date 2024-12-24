import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../util/constant'
import { checkValidData } from '../util/validate';

const Login = () => {
  const [isSignInForm, setInSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setInSignForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="img" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm &&
          <input ref={name} type="text" placeholder="Enter Name" className='p-4 my-4 w-full bg-gray-800' />
        }
        <input ref={email} type="text" placeholder="Enter Email address" className='p-4 my-4 w-full bg-gray-800' />
        <input ref={password} type="Password" placeholder="Enter Password" className='p-4 my-4 w-full bg-gray-800' />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <buttton className="p-2 my-2 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </buttton>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?Sign Up Now" : "Already registred? sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login