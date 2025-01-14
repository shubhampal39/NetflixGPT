import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12'>
            <h2 className='text-6xl font-bold'>{title}</h2>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className="">
                <button className="bg-gray-500 text-black p-4 px-16">Play</button>
                <button>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle