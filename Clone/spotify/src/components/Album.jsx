import React from 'react'
import { useNavigate } from 'react-router-dom'

const Album = ({image, desc, name, id}) => { //props pass kr raha hon assets mai assest.js ke file mai han sab 

  const navigate= useNavigate();
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2  px-3 rounded hover:bg-[#ffffff24] cursor-pointer'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>

    </div>
  )
}

export default Album