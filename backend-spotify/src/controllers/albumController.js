import {v2 as cloudinary} from 'cloudinary';
import albumModel from '../models/albumModel.js';


const addAlbum = async(req, res)=>{
    try {
        const name= req.body.name;
    const bgColour= req.body.bgColour;
    const desc= req.body.desc;
    const imageFile= req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});

    const albumData = {
        name , bgColour, desc, image: imageUpload.secure_url
    }
      const album= albumModel(albumData);
      await album.save();

      res.json({success:true, message: "Album added successfully"});
    } catch (error) {
        res.json({success: false, message:"Failed to add Album"});
    }
}

const addList = async (req, res) => {
    try {
      const allAlbums = await albumModel.find({});
      console.log("Fetched albums:", allAlbums); // Log fetched albums
      res.json({
        success: true,
        albums: allAlbums,
      });
    } catch (error) {
      console.error("Error in fetching albums:", error); // Log errors
      res.json({
        success: false,
        message: "Failed to get albums",
      });
    }
  };
  
const removeAlbum= async(req,res)=>{
   try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"Finaly deleted the album"});
    
   } catch (error) {
     res.json({success:false})
   }
}

export {addAlbum, addList, removeAlbum};