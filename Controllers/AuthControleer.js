const {
  encriptPassword,
  generateToken,
  verifyPassword,
} = require("../Services/AuthService");
const { checkEmailExist } = require("../Services/EmailService");
const db = require("../Config/Connection");
const collection = require("../Config/Collection");
const { welcomeEmail } = require("../Email/AuthEmails");

const { ObjectId } = require("mongodb");
module.exports = {
  doSignup: async (req, res) => {
    let { fname, lname, Password, email } = req.body;
    if (!fname || !lname || !Password || !email) {
      res.send({ error: "All Fields Required" });
    } else {
      try {
        let { Email } = await checkEmailExist(email);

        if (Email) {
          res.send({ error: "email allready exist" });
        } else {
          let user = {
            fname,
            lname,
            password: await encriptPassword(Password),
            email,
          };
         await db.get().collection(collection.USER_COLLECTION).insertOne(user);
          welcomeEmail({ email, user });
         await db.get().collection(collection.USER_DATA_COLLECTION).insertOne({fname,lname,email,userId:ObjectId(user._id),status:"inactive"})
          res.send({
            message: "user Created Successfully",
            user: { fname, lname, email },
            token: await generateToken(user._id),
          });
        }
      } catch (error) {
        res.send({ error: "Signup Faild", err: error });
      }
    }
  },
  handleLogin: async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
      res.send({ error: "email and password must be enter" });
    } else {
      try {
        let user = await db
          .get()
          .collection(collection.USER_COLLECTION)
          .findOne({ email });
        if (!user) {
          res.send({ error: "User not Fount" });
        } else {
          let { login } = await verifyPassword({
            UserPassword: user.password,
            password,
          });
          login
            ? res.send({
                user: { fname: user.fname, lname: user.lname, email },
                token: await generateToken(user._id),
                message: "user Logind Successfully",
              })
            : res.send({ error: "Email or Password Is Incorrect" });
        }
      } catch (error) {
        res.send(error);
      }
    }
  },

  handleForgotPassword: () => {},
};
