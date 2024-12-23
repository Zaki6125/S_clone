// import React, { useEffect, useState } from 'react'
// import { url } from '../App';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const ListAlbum = () => {

//   const [data, setData]= useState([]);
//   const fetchAlbums = async ()=>{
//     try {
//       const response = await axios.get(`${url}/api/album/list`);

//       if(response.data.success)
//       {
//         setData(response.data.albums)
//       }
//     } catch (error) {
//       toast.error("error occur")
//     }
//   }

//   const removeAlbum= async(id)=>{
//     try {
//       const response = await axios.post(`${url}/api/album/remove`, {id});

//       if (response.data.success) {
//         toast.success(response.data.message)
//         await fetchAlbums();
//       }
      
//     } catch (error) {
//       toast.error("Error ocuure")
//     }
//   }

//   useEffect(() => {
//     fetchAlbums();
//     console.log(data); // Render ke baad data state ko check karein
//   }, []);
  
 
//   return (
//     <div>
//       <p>All Album List</p>
//       <br />
//       <div>
//         <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
//           <b>Image</b>
//           <b>Name</b>
//           <b>Description</b>
//           <b>Action</b>
//           <b>Album Colour</b>
//         </div>
//         {data.map((item,index)=>{
//          return (
//           <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
//             <img  className="w-12" src={item.image} alt="" />
//             <p>{item.name}</p>
//             <p>{item.desc}</p>
//             <input type="color" value={item.bgColour} />
//             <p onClick={()=>removeAlbum(item._id)} className='cursor-pointer'>x</p>
//           </div>
//          )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ListAlbum

import React, { useEffect, useState } from "react";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";


const ListAlbum = () => {
  const [Data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      console.log("API Response:", response.data); // Debug API response
      if (response.data && response.data.success) {
        setData(response.data.albums || []); // Fixed key: 'albums'
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching albums:", error);
      setData([]);
      toast.error("Error occurred while fetching albums");
    }
  };
  
  

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbums(); // Refresh album list
      }
    } catch (error) {
      console.error("Error removing album:", error);
      toast.error("Error occurred while removing album");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <p>All Album List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Action</b>
          <b>Album Colour</b>
        </div>
        {Data && Data.length > 0 ? (
          Data.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            >
              <img className="w-12" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColour} readOnly />
              <p onClick={() => removeAlbum(item._id)} className="cursor-pointer">
                x
              </p>
            </div>
          ))
        ) : (
          <p>No albums found.</p>
        )}
      </div>
    </div>
  );
};

export default ListAlbum;
