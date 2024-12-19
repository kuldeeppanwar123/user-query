import mongoose from "mongoose";
import {config as conf} from 'dotenv';
conf();

const MONGO_URL = process.env.MONGO_URL;

export default async function connectDB(){
    try {
        await mongoose.connect(MONGO_URL, {serverSelectionTimeoutMS:30000});
        console.log("DB connected!");
    } catch (err) {
       console.log('error in db connection!');
       process.exit(1);
    }
}