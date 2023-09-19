import React, { useState } from 'react'
import { AiFillAlert,AiOutlineHeart  } from 'react-icons/ai';


import {BsThreeDots} from 'react-icons/bs'
import "./PostCard.css"

const PostCard = () => {

  const [showDropDown,setshowDropDown]=useState(false);
  const [isPostLiked,setIsPostLiked]=useState(false);

  const handlePostLike=()=>{
    setshowDropDown(!showDropDown);
  }

  const handleClick=()=>{
    setIsPostLiked(!isPostLiked);
  }

  return (
    <div>
      <div className='border rounded-md w-full' >
        <div className='flex justify-between items-center w-full py-4 px-5' >
          <div className='flex items-center' >
            <img 
            className='h-12 w-12 rounded-full'
            src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=" 
            alt=""               
            />
            <div className='pl-2' >
              <p className=' font-semibold text-sm' >username</p>
              <p className='font-thin text-sm' >location</p>
            </div>
          </div>
          <div className="dropdown" >
            <BsThreeDots className='dots' onClick={handleClick} />
            <div  className='dropdown-content' >
              {showDropDown && <p className=' bg-black text-white py-1 px-4 cursor-pointer' >Delete</p>}
            </div>
          </div>
        </div>
        <div className='w-full' > 
          <img 
              className='w-full'
              src="https://cdn.pixabay.com/photo/2023/06/11/16/07/switzerland-8056381_640.jpg" 
              alt="" />
        </div>
        <div>
          {isPostLiked ? <AiFillAlert onClick={handlePostLike} />
                       : <AiOutlineHeart onClick={handlePostLike} />}

        </div>
      </div>
    </div>
  )
}

export default PostCard