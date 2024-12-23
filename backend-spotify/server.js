import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js'
import connectDB from './src/config/mongoDB.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoutes.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());
//yahan initilize kr raha hon routers ko
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)

//routing
app.get('/', (req,res)=> res.send("API working"))
app.listen(port,()=>console.log(`server is startes on port ${port}`))