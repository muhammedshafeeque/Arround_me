const bcrypt = require("bcrypt");
const db=require('../Config/Connection')
const Collection=require('../Config/Collection')
const jwt=require('jsonwebtoken');
const { ObjectId } = require("mongodb");
module.exports={
    encriptPassword:(password)=>{
        return new Promise(async(resolve,reject)=>{
            let encrypted_password = await bcrypt.hash(password, 10);
            resolve(encrypted_password)
        })
    },
    generateToken:(id)=>{
        return new Promise(async(resolve,reject)=>{
            let token= jwt.sign({ id }, process.env.JWT_TOCKEN_SECRET, {
                expiresIn: "30d",
            })
            try {
                let user=await db.get().collection(Collection.USER_COLLECTION).findOne({_id:ObjectId(id)})
                if(!user.tokens){
                    await db.get().collection(Collection.USER_COLLECTION).updateOne({_id:ObjectId(id)},
                    {
                        $set:{
                            tokens:[token]
                        }
                    })
                    resolve(token)
                }else{
                    await db.get().collection(Collection.USER_COLLECTION).updateOne({_id:ObjectId(id)},
                    {
                        $push:{tokens:token}
                    })
                    resolve(token)
                }
            } catch (error) {
                reject({error:"Authentication faild"})
            }
            
            
        })
    },
    verifyPassword:({password,UserPassword})=>{
        return new Promise(async(resolve,reject)=>{
        bcrypt.compare(password,UserPassword).then((status)=>{
            status?resolve({login:true}):resolve({login:false})
        })
       
        })
    },
    verifyUser:async(req,res,next)=>{
        let token;
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
          ){
            
              try {
                  token=req.headers.authorization.split(" ")[1]
              
                  const decoded=jwt.verify(token,process.env.JWT_TOCKEN_SECRET)
                  
                  let user=await db.get().collection(Collection.USER_COLLECTION).findOne({_id:ObjectId(decoded.id)}
                  )
                 
                  if(!user){
                    
                      res.send({error:"Authentication faild Please Login Again  "})
                  }else if(user.tokens.indexOf(token)>-1){
                    
                    req.user=user
                    req.user.token=token
                    next()
                  }else{
                    
                    res.send({error:"Authentication faild Please Login Again  "}) 
                  }
              } catch (error) {
                  
                res.send({error:"Authentication faild Please Login Again  "})
              }
          }else{
            res.send({error:"Authentication faild Please Login Again  "})
          }
    
    }
}