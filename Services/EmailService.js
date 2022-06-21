const collection=require('../Config/Collection')
const db=require('../Config/Connection')
module.exports={
    checkEmailExist:(email)=>{
        return new Promise(async(resolve,reject)=>{
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:email})
           
            user?resolve({Email:true}):resolve({Email:false})
        })
    },
    changEmailaddress:()=>{
        return new Promise((resolve,reject)=>{
            
        })
    },
    sendEmail:()=>{
        return new Promise((resolve,reject)=>{
            
        })
    }
}