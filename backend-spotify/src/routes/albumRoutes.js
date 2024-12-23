import express from 'express';
import upload from '../middleware/multer.js';
import { addAlbum, addList,removeAlbum } from '../controllers/albumController.js';

const albumRouter= express.Router();
albumRouter.post('/add',upload.single('image'),addAlbum);
albumRouter.get('/list',addList);
albumRouter.post('/remove',removeAlbum);

export default albumRouter;