import React from 'react'
import {TbCircleDashed} from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className='py-10 border-2 w-full'>
        <div className='flex items-center'>
            <div>
                <img className='w-32 h-32 rounded-full' 
                src='https://cdn.pixabay.com/photo/2023/08/25/02/01/reader-8211917_640.png'
                 alt='profile' />
            </div>

            <div className='px-10 space-y-3'>
                <div className='flex space-x-5 items-center'>
                    <p className='text-xl'>username</p>
                    <button className='border border-1-slate-500 text-sm font-medium rounded-md px-2 py-1'>Edit Profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>

                <div className='flex space-x-5 items-center'>
                    <div >
                        <span  className='font-bold'>5</span>
                        <span className=' '>posts</span>
                    </div>
                    <div >
                        <span  className='font-bold'>5</span>
                        <span className=' '>follower</span>
                    </div>
                    <div >
                        <span  className='font-bold'>5</span>
                        <span className=' '>following</span>
                    </div>
                </div>

                <div className='flex flex-col  '>
                    <p className='font-semibold'>full name</p>
                    <p className='font-thin text-sm'>Hiii xxxx</p>
                     
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileUserDetails