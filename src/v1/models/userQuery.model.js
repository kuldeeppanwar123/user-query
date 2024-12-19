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
    email:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},
{
   timestamps:true
});

const UserQuery = mongoose.model("userQuery",userQuerySchema);
export default UserQuery;