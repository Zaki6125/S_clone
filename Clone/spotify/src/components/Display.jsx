import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState('#121212'); 
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  useEffect(() => {
    if (isAlbum) {
      const albumBgColor = albumsData[Number(albumId)]?.bgColor || '#121212'; 
      setBgColor(`linear-gradient(${albumBgColor}, #121212)`);
    } else {
      setBgColor('#121212');
    }
  }, [location, isAlbum, albumId]); 

  return (
    <div
      style={{ background: bgColor }} 
      className='w-[100%] m-2 px-6 pt-4 rounded text-white lg:w-[75%] overflow-auto lg:ml-0'
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
