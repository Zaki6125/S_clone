import {v2 as cloudinary} from 'cloudinary';
import songModel from '../models/songModel.js';
// const addSong = async (req,res)=>{
//     try {
//         const name= req.body.name;
//         const desc= req.body.desc;
//         const album= req.body.album;
//         const audioFile= req.file.audio[0];
//         const imageFile= req.file.image[0]; 
//         const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
//             resource_type: "video",
//         });
        
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//             resource_type: "image",
//         });
        

//         // console.log(name, desc, album, imageFile,audioUpload, imageUpload);
//         const duration = `${Math.floor(audioUpload.duration/60)}: ${Math.floor(audioUpload.duration%60)}`;
//         const songData ={
//             name, desc, album, 
//             image: imageUpload.secure_url,
//             file: audioUpload.secure_url,
//             duration,
//         }
//         const song =songModel(songData);
//         await song.save();

//         res.json({success:true, message: "Song Added"});
//     } catch (error) {
//         res.json({success:false})
//     }

// }

// const listSong = async (req,res)=> {
    
//     try {
//         const allSongs= await songModel.find({});
//         res.json({
//             success: true, 
//             songs: allSongs})
//     } catch (error) {
//         res.json({success: true});
//     }
// }
 
// export {addSong, listSong};
const addSong = async (req, res) => {
    try {
        console.log("Files Uploaded: ", req.files); // Debug uploaded files
        console.log("Body Data: ", req.body);       // Debug form data

        const audioFile = req.files['audio'] ? req.files['audio'][0] : null;
        const imageFile = req.files['image'] ? req.files['image'][0] : null;

        if (!audioFile || !imageFile) {
            return res.status(400).json({ success: false, message: "Audio or Image file is missing" });
        }

        // Cloudinary upload
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;
        const songData = {
            name: req.body.name,
            desc: req.body.desc,
            album: req.body.album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration,
        };

        const song = new songModel(songData);
        await song.save();

        res.json({ success: true, message: "Song Added" });
    } catch (error) {
        console.error("Error Details:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const listSong = async (req,res)=> {
    
    try {
        const allSongs= await songModel.find({});
        res.json({
            success: true, 
            songs: allSongs})
    } catch (error) {
        res.json({success: true});
    }
};

const removeSong= async (req, res) =>{

  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({
        success: true,
        message: "Song removed"
    });
    
    
  } catch (error) {
   res.json({
    success: "false"
   });
  }
    
}
export {addSong, listSong, removeSong};