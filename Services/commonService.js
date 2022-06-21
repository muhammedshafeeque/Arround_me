var passwordGenerator = require('generate-otp')
module.exports={
    otpGenerator:()=>{
        return passwordGenerator.generate(6);
    }
}