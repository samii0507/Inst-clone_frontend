import React from 'react'
import {AiOutlineTable,AiOutlineUser} from "react-icons/ai";
import {RiVideoLine} from "react-icons/ri";
import {BiBookmark} from "react-icons/bi";

const ReqUserPostPart = () => {
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
    <div></div>
  )
}

export default ReqUserPostPart