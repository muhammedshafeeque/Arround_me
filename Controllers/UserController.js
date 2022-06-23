const db = require("../Config/Connection");
const collection = require("../Config/Collection");
const { ObjectId } = require("mongodb");
const { otpGenerator } = require("../Services/commonService");
const { otpEmail } = require("../Email/commonEmail");
module.exports = {
  getUserDetails: (req, res) => {
    res.send({
      user: {
        fname: req.user.fname,
        lname: req.user.lname,
        email: req.user.email,
      },
      token: req.user.token,
    });
  },
  getUserData: async (req, res) => {
    let data = await db
      .get()
      .collection(collection.USER_DATA_COLLECTION)
      .findOne({ userId: ObjectId(req.user._id) });
    res.send(data);
  },
  sendOtp: async (req, res) => {
    if(req.user.otp===0){
        let otp = await otpGenerator();
    await db
      .get()
      .collection(collection.USER_COLLECTION)
      .updateOne(
        { _id: ObjectId(req.user._id) },
        {
          $set: {
            otp: otp,
          },
        }
      );
    setTimeout(() => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .updateOne(
          { _id: ObjectId(req.user._id) },
          {
            $set: {
              otp: 0,
            },
          }
        );
    }, "10000");
    otpEmail({ otp, subject: "Verification code ", email: req.user.email });
    res.send({ message: "email sent Successfully" });
    }else{
        res.send({ message: "email sent Successfully" })  
    }
  },
  verifyOtp: async (req, res) => {
    if(req.user.otp === req.params.otp){

        await db.get().collection(collection.USER_COLLECTION).updateOne({ _id: ObjectId(req.user._id) },
          {
            $set: {
              otp: 0,
            },
          }
        );
        await db.get().collection(collection.USER_DATA_COLLECTION).updateOne({ userId: ObjectId(req.user._id) },
          {
            $set: {
              status:"active"
            },
          }
        );
        
        res.send({ message: "Email Verified Successfully" })

    }else{
        res.send({ error: "Incorrect OTP" });
    }
     
       
  },
};
