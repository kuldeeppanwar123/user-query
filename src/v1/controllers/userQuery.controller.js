import UserQuery from "../models/userQuery.model.js"


export async function createUserQueryController(req, res){
  try {
    const {firstname , lastname, schoolName,state, city, teacherCount, source, email, phone, message } = req.body;    
    if(!firstname || !lastname || !schoolName || !phone || !state || !city){
      return res.send({status: "error", statusCode: 500, msg:"Fields missing"})
    }
    await UserQuery.create({firstname , lastname, schoolName,state, city, teacherCount, source, email, phone, message})
    return res.send({status: "success", statusCode:200, msg: "query registered successfully"})
  } catch (error) {
    return res.send({status:"error", statusCode:500, msg:error.message})    
  }
}