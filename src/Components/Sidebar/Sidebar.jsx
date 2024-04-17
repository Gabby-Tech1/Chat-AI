import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";







const Sidebar = () => {
    const [extend, setExtend] = useState(false)



  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between bg-red-600 px-[10px] py-[15px] '>
        <div className='top'>
            <IoMenu onClick={() => setExtend(prev=>!prev)}  className='text-3xl menu block ml-2 cursor-pointer'/>
        <div className='new-cha mt-[50px] inline-flex items-center gap-[10px] px-[10px] py-[8px] bg-white/80 bg-opacity-60 border rounded-[50px] text-gray-600 cursor-pointer text-md'>
            <FaPlus className='text-3xl block ml-2 cursor-pointer'/>
            {extend ? <p>New Chat</p> : null}
            
        </div>
        {extend ? 
        <div className='recent flex flex-col'>
            <p className='recent-title text-xl mt-[30px] mb-[20px]'>Recent</p>
            <div className='recent-entry flex items-start hover:bg-white/70 duration-500 ease-in-out gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg'>
                <MdMessage className='text-3xl block ml-2 cursor-pointer' />
                <p>What is react...</p>

            </div>
        </div>
        : null}

        </div>
        <div className='bottom flex flex-col'>
            <div className="bottom-item pr-[10px] flex items-start hover:bg-white/70 duration-500 ease-in-out gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg">
                <FaRegQuestionCircle className='text-3xl block ml-2 cursor-pointer' />
                {extend ?<p>Help</p> : null}
            </div>
            <div className="bottom-item pr-[10px] flex items-start hover:bg-white/70 duration-500 ease-in-out gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg">
                <FaHistory className='text-3xl block ml-2 cursor-pointer' />
                {extend ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item pr-[10px] flex items-start hover:bg-white/70 duration-500 ease-in-out gap-[10px] p-[10px] rounded-[50px] text-gray-800 cursor-pointer text-lg">
                <CiSettings className='text-3xl block ml-2 cursor-pointer' />
                {extend ? <p>Settings</p> : null}
            </div>
            

        </div>
    </div>
  )
}

export default Sidebar