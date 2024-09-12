import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
// import { error } from 'console';
import cors from 'cors';
import AuthRoutes from "./Routes/AuthRoutes.js";
import UserRoute from "./Routes/UserRoutes.js"
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from './Routes/uploadRoute.js'


const app = express();
app.use(express.static('public'))
app.use('/images', express.static("images"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

dotenv.config()
mongoose.connect(process.env.MONGO_DB).then(()=>app.listen(process.env.PORT, ()=>
console.log("Server Strated"))).catch((error)=>console.log(error));


app.use('/auth', AuthRoutes)
app.use('/user', UserRoute) 
app.use('/post', PostRoute)
app.use('/upload', UploadRoute)