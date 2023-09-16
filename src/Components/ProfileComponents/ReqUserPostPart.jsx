import React from 'react'
import {AiOutlineTable,AiOutlineUser} from "react-icons/ai";
import {RiVideoLine} from "react-icons/ri";
import {BiBookmark} from "react-icons/bi";
import { useState } from 'react';
import ReqUserPostCard from './ReqUserPostCard';

const ReqUserPostPart = () => {
    const [activeTab,setActiveTab]=useState()
    const tabs=[
        {
            tab:"Post",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeTab:""
        },
        {
            tab:"Reels",
            icon:<RiVideoLine></RiVideoLine>,

        },
        {
            tab:"Saved",
            icon:<BiBookmark/>,
        },
        {
            tab:"Tagged",
            icon:<AiOutlineUser></AiOutlineUser>,
        }
        

    ]
  return (
    <div>
        <div className='mt-5 flex space-x-14 border -t relative'>
            {tabs.map((item) =>( 
              <div onClick={()=>setActiveTab(item.tab)}  
              className={`${activeTab===item.tab?'border-t border-black':'opacity-60'} flex uppercase cursor-pointer items-center space-x-1  text-sm py-2`}>
                <p>{item.icon}</p>
                <p className='ml-1 textsm'>{item.tab}</p>
            </div>
            ))}
        </div>

            <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item) =><ReqUserPostCard/>)}
            </div>
            </div>

        </div>
    
  )
}

export default ReqUserPostPart