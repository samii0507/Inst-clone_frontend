import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./ReqUserCard.css"

const ReqUserPostCard = () => {
  return (
    <div className='post w-60 h-60' >
        <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/08/15/16/55/motorcycle-8192323_640.jpg" alt="" />
        <div className='overlay'>
            <div className='overlay-text flex justify-between'>
            <div>
                <AiFillHeart></AiFillHeart> <span>10</span>
            </div>
            <div>
                <FaComment/> <span>5</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard