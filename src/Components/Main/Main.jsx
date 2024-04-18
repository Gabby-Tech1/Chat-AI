import React, { useContext } from 'react'
import profile from '../../Assets/profile.jpg'
import ai from '../../Assets/ai.jpg'
import { FaRegCompass } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Context } from '../../Context/GTContext';
import '../../index.css'

const Main = () => {

    const {onSent, recentPrompt, showResults, isLoading, resultData, setInput, input} = useContext(Context)


  return (
    <div className='main flex-1 min-h-[100vh] pb-[15vh] relative'>
        <div className='nav flex items-center justify-between text-lg p-[12px] text-gray-600'>
            <p className='text-2xl md:text-4xl'>GT Chat AI</p>
            <img className='w-[50px] sm:w-[60px] md:w-[70px] cursor-pointer rounded-[50%]' src={profile} alt="" />
        </div>
        <div className='main-container max-w-[900px] m-auto'>
            {!showResults ? 
            <>
                <div className='greet my-[50px] mx-0 text-4xl md:text-5xl text-gray-400 font-semibold p-[20px]'>
                    <p><span className=' bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>Hello, Developer</span></p>
                    <p>How can I help you?</p>
                </div>
                <div className="cards grid grid-cols-2 lg:grid-cols-4 p-[20px] gap-[15px]">
                    <div className="card hover:bg-gray-300 h-[200px] p-[15px] bg-white/50 rounded-lg relative cursor-pointer">
                        <p className='text-gray-600 sm:text-xl text-md'>Suggest beautiful places to see on an upcoming road trip</p>
                        <FaRegCompass className='p-2 absolute bg-white rounded-full bottom-3 right-3 text-4xl sm:text-5xl text-black' />
                    </div>
                    <div className="card hover:bg-gray-300 h-[200px] p-[15px] bg-white/50 rounded-lg relative cursor-pointer">
                        <p className='text-gray-600 sm:text-xl text-md'>Briefly summarize this concept: programming habit</p>
                        <FaRegLightbulb className='p-2 absolute bg-white rounded-full bottom-3 right-3 text-4xl sm:text-5xl text-black' />
                    </div>
                    <div className="card hover:bg-gray-300 h-[200px] p-[15px] bg-white/50 rounded-lg relative cursor-pointer">
                        <p className='text-gray-600 sm:text-xl text-md'>Brainstorm bonding activities for our work retreat</p>
                        <TbMessage className='p-2 absolute bg-white rounded-full bottom-3 right-3 text-4xl sm:text-5xl text-black' />
                    </div>
                    <div className="card hover:bg-gray-300 h-[200px] p-[15px] bg-white/50 rounded-lg relative cursor-pointer">
                        <p className='text-gray-600 sm:text-xl text-md'>Improve the readability of the following code</p>
                        <FaCode className='p-2 absolute bg-white rounded-full bottom-3 right-3 text-4xl sm:text-5xl text-black' />
                    </div>
                </div>
            </> : <div className='result py-0 px-[5%] max-h-[70vh] overflow-y-scroll'>
                    <div className="result-title my-10 mx-0 gap-5 flex items-center">
                        <img className='w-10 rounded-full' src={profile} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data flex items-start gap-5">
                        <img className='w-10 rounded-full' src={ai} alt="" />
                        {isLoading ? 
                        <div className='loader w-full flex flex-col gap-2'>
                            <hr className='rounded-[4px] border-none bg-white/50 bg-gradient-to-r from-blue-300 via-white to-blue-300 h-5' />
                            <hr className='rounded-[4px] border-none bg-white/50 bg-gradient-to-r from-blue-300 via-white to-blue-300 h-5' />
                            <hr className='rounded-[4px] border-none bg-white/50 bg-gradient-to-r from-blue-300 via-white to-blue-300 h-5' />
                        </div> :
                        <p className='text-md font-normal leading-[1.8] ' dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>}
            

            <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-[20px] mt-10">
                <div className="search flex items-center justify-between gap-1 bg-white/60 py-3 pl-1 rounded-3xl">
                    <input onChange={(e) => setInput(e.target.value)} value={input} className='flex-1 bg-transparent border-none outline-none pl-1 text-md md:text-lg' type="text" placeholder='Enter a prompt here...' />
                    <div className='flex items-center gap-1 sm:gap-2'>
                        <GrGallery className='text-xl sm:text-2xl md:text-3xl cursor-pointer text-gray-600 hover:text-black' />
                        <FaMicrophoneAlt className='text-xl sm:text-2xl md:text-3xl cursor-pointer text-gray-600 hover:text-black' />
                        {input ? <IoMdSend onClick={()=> onSent()} className='text-xl sm:text-2xl md:text-3xl cursor-pointer text-gray-600 hover:text-black' /> : null}
                    </div>
                </div>
                <p className="bottom-info text-sm my-3 mx-auto text-center font-semibold">
                    GT Chat AI may display inappropriate info, including about people, so double-check its response. Your privacy and GT Apps
                </p>
            </div>

        </div>

    </div>
  )
}

export default Main