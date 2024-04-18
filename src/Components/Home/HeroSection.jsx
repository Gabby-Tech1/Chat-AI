import React from 'react'
import video1 from '../../Assets/video1.mp4'
import video2 from '../../Assets/video2.mp4'
import Testimonials from './Testimonials'

const HeroSection = () => {
  return (
    <div className='mt-9'>

        <div className="flex flex-col items-center justify-center w-full mt-9 p-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold tracking-wide">
                GabbyTech builds AI tools  
                <span className='bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text'>
                    {" "}
                    for developers
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Empower your creativity and bring your GT app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immerse reality.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className='bg-gradient-to-r from-blue-500 to-red-500 py-3 px-4 mx-3 rounded-md'>
                    Start for free
                </a>
                <a href="#" className='py-3 px-4 mx-3 rounded-md border'>
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay  muted loop className='rounded-lg w-1/2 border border-red-500 shadow-red-400 mx-2 my-4'>
                    <source  src={video1} type='video/mp4'/>
                    You browser does not support video tag
                </video>
                <video autoPlay  muted loop className='rounded-lg w-1/2 border border-red-500 shadow-red-400 mx-2 my-4'>
                    <source  src={video2} type='video/mp4'/>
                    You browser does not support video tag
                </video>
            </div>
        </div>
        <Testimonials/>
        <div className='text-center bottom-0 mt-8 bg-blue-500 text-white'>
            Created by Gabby Tech @ 2024
        </div>
    </div>
  )
}

export default HeroSection