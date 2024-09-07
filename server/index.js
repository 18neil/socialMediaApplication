import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
// import { error } from 'console';
import AuthRoutes from "./Routes/AuthRoutes.js";
import UserRoute from "./Routes/UserRoutes.js"

const app = express();
app.use(express.urlencoded({ extended: true }));

dotenv.config()
mongoose.connect(process.env.MONGO_DB).then(()=>app.listen(process.env.PORT, ()=>
console.log("Server Strated"))).catch((error)=>console.log(error));


app.use('/auth', AuthRoutes)
app.use('/user', UserRoute)