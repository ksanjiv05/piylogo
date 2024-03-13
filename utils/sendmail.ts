const nodemailer = require("nodemailer");

//-----------------------------------------------------------------------------
export async function sendMail(subject: any, toEmail: any, otpText: any) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gupta.piyush.1232@gmail.com", //process.env.NODEMAILER_EMAIL,
        pass: "aijt pnod qbpt ilye", //process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: "gupta.piyush.1232@gmail.com", //process.env.NODEMAILER_EMAIL,
      to: "piyartstudio@gmail.com",
      subject: subject,
      text: otpText,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent -----");
    // if (info) {
    //   console.log("Email Not Sent -h");
    //   return false;
    // } else {
    //   console.log("Email Sent");
    //   return true;
    // }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
