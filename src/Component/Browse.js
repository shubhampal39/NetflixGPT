import React from 'react'
import { LOGO, USER_AVATAR } from '../util/constant'

const Browse = () => {
  return (
    <div className='className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10"'>
      <img className="w-44" src={LOGO} alt="Logo" />
      <div className='flex'>
        <img src={USER_AVATAR} alt='avtar logo' />
        <button>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Browse