import UserQuery from "../models/userQuery.model.js"


export async function createUserQueryController(req, res){
  try {
    const {firstname , lastname, email, phone, message } = req.body;    
    if(!firstname || !lastname || !email || !phone || !message){
      return res.send({status: "error", statusCode: 500, msg:"All fields required"})
    }
    await UserQuery.create({firstname, lastname, email, phone, message})
    return res.send({status: "success", statusCode:200, msg: "query registered successfully"})
  } catch (error) {
    return res.send({status:"error", statusCode:500, msg:error.message})    
  }
}