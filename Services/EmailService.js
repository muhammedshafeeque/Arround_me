const collection=require('../Config/Collection')
const db=require('../Config/Connection')
var nodemailer = require('nodemailer');
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
    sendEmail:(emailData)=>{
        return new Promise((resolve,reject)=>{
            var transporter = nodemailer.createTransport({
                service:process.env.MAIL_SENDER_PROVIDER,
                auth: {
                  user: process.env.MAIL_SENDER_EMAIL,
                  pass: process.env.MAIL_SENDER_EMAIL_PASSWORD
                }
              });
              
              var mailOptions = {
                from:process.env.MAIL_SENDER_EMAIL,
                to: emailData.email,
                subject:emailData.subject,
                // text: 'That was easy!'
                html:emailData.html
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  reject(error)
                } else {
                  console.log('Email sent: ' + info.response);
                  resolve(info.response)
                }
              });
        })
    }
}