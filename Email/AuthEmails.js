const { sendEmail } = require("../Services/EmailService");

module.exports = {
  welcomeEmail: async (data) => {
    let mail = {
      email: data.email,
      subject: `Welcome Mr/Ms ${data.user.fname} ${data.user.lname} to Around Me Community`,
      html: `<html>
        <p> Thank you for choosing Arround me As your Social partner ,pleas login to your account  , <br>
        <p>Yo will get Onother Email with an OTP , use the OTP for activating youre account.  </p><br>
        <p>After Activation pleas  compleat your Profile and lets enjoy </p>  
    </html>`,
    };
    await sendEmail(mail);
  },
  
};
