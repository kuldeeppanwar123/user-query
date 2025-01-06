import mongoose from "mongoose";

const userQuerySchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{ 
        type:String,
        required:true,
    },
    schoolName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        required: true
    },
    teacherCount: {
        type: Number
    },
    source: {
        type: String
    },
    message:{
        type: String
    }
},
{
   timestamps:true
});

const UserQuery = mongoose.model("userQuery",userQuerySchema);
export default UserQuery;