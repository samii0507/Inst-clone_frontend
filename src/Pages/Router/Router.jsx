import React from 'react'
import HomePage from '../HomePage/HomePage'
import SideBar from '../../Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'

const Router = () =>{
  return (
    <div>
        <div className='flex'>
            <div>
                <SideBar />
            </div>
            <div>
                <Routes>
                 <Route path='/' element={<HomePage/>} ></Route>
                </Routes>
                
            </div>
        </div>
    </div>
  )
}


export default Router