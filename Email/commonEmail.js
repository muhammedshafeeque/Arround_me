const { sendEmail } = require("../Services/EmailService");
module.exports={
    otpEmail:async(data)=>{
        let mail = {
            email: data.email,
            subject: data.subject,
            html: `<html>
              <p>Youre OTP is : </p><br>
              <h1>${data.otp}</h1><br>
              <p>Your OTP only Valid for 10 minuts</p>
              <p>Dont share this with Anyone</p>
    
          </html>`,
          };
          await sendEmail(mail);
      }
}