const { encriptPassword, generateToken } = require("../Services/AuthService")
const { checkEmailExist } = require("../Services/EmailService")
const db=require('../Config/Connection')
const collection=require('../Config/Collection')
module.exports={
    doSignup:async(req,res)=>{
        let {fname,lname,Password,email}=req.body
        if(!fname||!lname||!Password||!email){
            res.send({error:"All Fields Required"})
        }else{
            try {
               let {Email} =await checkEmailExist(email)
              
               if(Email){
                res.send({error:"email allready exist"})
               }else{
                let user={fname,lname,password:await encriptPassword(Password),email}
                db.get().collection(collection.USER_COLLECTION).insertOne(user)
                res.send({message:"user Created Successfully",user:{fname,lname,email},token:await generateToken(user._id)})
               }
            } catch (error) {
                res.send({error:"Signup Faild",err:error})
            }
        }
    },
    doLogin:()=>{

    },
    handleForgotPassword:()=>{

    }
}