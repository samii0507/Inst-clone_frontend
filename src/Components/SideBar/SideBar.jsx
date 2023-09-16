import React from 'react'

const SideBar = () => {
  return (
    <div>
        <div>
            <div>
            <img className='w-40 ' src='https://i.imgur.com/zqpwkLQ.png' alt='instagram' />
            </div>
        </div>
        <div className='flex items-center cursor-pointer pb-10'>
            <IoReorderThreeOutline className='text-2xl'/>
            <p  className='ml-5'>More</p>
        </div>

    </div>
  )
}

export default SideBar