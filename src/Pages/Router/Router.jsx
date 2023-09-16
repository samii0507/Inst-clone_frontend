import React from 'react'
import HomePage from '../HomePage/HomePage'
import SideBar from '../../Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'

const Router = () =>{
  return (
    <div>
        <div className='flex'>
            <div className='w-[20%] border-1-slate-500'>
                <SideBar />
            </div>
            <div className='flex'>
                <Routes>
                 <Route path='/' element={<HomePage/>} ></Route>
                 <Route path='/username' element={<Profile/>} ></Route>
                </Routes>
                
            </div>
        </div>
    </div>
  )
}


export default Router