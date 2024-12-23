import React from 'react'
import Navbar from './Navbar'
import { albumsData ,songsData} from '../assets/assets'
import Album from './Album'
import SongItem from './SongItem'

const Home = () => {
  return (
   <>
       <Navbar/>
       <div className='mb-4'>
       <h1 className='my-5 font-bold text-2xl'>Featured Chart</h1>
       <div className='flex overflow-auto'>
       {albumsData.map((item, index)=>(<Album key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
       </div>  
       </div>

       <div className='mb-4'>
       <h1 className='my-5 font-bold text-2xl'>Today's best songs</h1>
       <div className='flex overflow-auto'>
      {songsData.map((item, index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
       </div>
       </div>
       
   </>
  )
}

export default Home