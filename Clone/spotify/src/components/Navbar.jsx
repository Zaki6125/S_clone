import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className ='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_right} alt="" />

        </div>
         <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='text-white px-3 py-1 text-[15px] rounded-2xl  cursor-pointer'>Install app</p>
          <p className='bg-purple-400 text-black h-7 w-7 rounded-full flex items-center justify-center cursor-pointer'>Z</p>
         </div>
    </div>
    <div className='mt-4 flex items-center gap-2'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className=' text-white px-4 py-1 rounded-2xl cursor-pointer '>Music</p>
      <p className=' text-white px-4 py-1 rounded-2xl cursor-pointer '>podcast</p>
    </div>
    
    </>
  )
}

export default Navbar