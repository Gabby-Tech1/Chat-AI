import React, { useContext, useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { Context } from '../../Context/GTContext';







const Sidebar = () => {
    const [extend, setExtend] = useState(false)

    const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between bg-blue-300 bg-opacity-50 px-[5px] sm:px-[10px] py-[15px] '>
        <div className='top'>
            <IoMenu onClick={() => setExtend(prev=>!prev)}  className='text-3xl menu block ml-2 cursor-pointer'/>
        <div onClick={()=>newChat()} className='new-chat mt-[50px] inline-flex items-center gap-[10px] px-3 sm:px-[10px] py-[8px] bg-white/80 bg-opacity-60 border rounded-[50px] text-gray-600 cursor-pointer text-md'>
            <FaPlus className='text-3xl block cursor-pointer'/>
            {extend ? <p className='hidden sm:block'>New Chat</p> : null}
            
        </div>
        {extend ? 
        <div className='recent sm:flex flex-col hidden'>
            <p className='recent-title text-xl mt-[30px] mb-[20px]'>Recent</p>
            {prevPrompt.map((item, index)=>{
                return (
                    <div onClick={()=>loadPrompt(item)} className='recent-entry flex items-start hover:bg-white/70 duration-500 ease-in-out gap-[10px] p-2 sm:p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-md sm:text-lg'>
                        <MdMessage className=' text-xl sm:text-3xl block cursor-pointer' />
                        <p>{item.slice(0,15)}...</p>
                    </div>
                )
            })}

        </div>
        : null}

        </div>
        <div className='bottom flex flex-col'>
            <div className="bottom-item pr-2 sm:pr-[10px] flex items-start hover:bg-white/70 duration-500 ease-in-out gap-1 sm:gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg">
                <FaRegQuestionCircle className='text-3xl block cursor-pointer' />
                {extend ?<p className='hidden sm:block'>Help</p> : null}
            </div>
            <div className="bottom-item pr-2 sm:pr-[10px] flex items-start hover:bg-white/70 duration-500 ease-in-out gap-1 sm:gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg">
                <FaHistory className='text-3xl block cursor-pointer' />
                {extend ? <p className='hidden sm:block'>Activity</p> : null}
            </div>
            <div className="bottom-item pr-2 sm:pr-[10px] flex items-start hover:bg-white/70 duration-500 ease-in-out gap-1 sm:gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg">
                <CiSettings className='text-3xl block cursor-pointer' />
                {extend ? <p className='hidden sm:block'>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar