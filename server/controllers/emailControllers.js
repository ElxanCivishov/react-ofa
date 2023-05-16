import * as dotenv from "dotenv";
const result = dotenv.config();
import nodemailer from "nodemailer";
console.log(result);
let transporter = nodemailer.createTransport({
  host: process.env.REACT_APP_SMTP_HOST,
  port: process.env.REACT_APP_SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.REACT_APP_SMTP_MAIL, // generated ethereal user
    pass: process.env.REACT_APP_SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;
  var mailOptions = {
    from: email,
    to: process.env.REACT_APP_SMTP_MAIL,
    subject: subject,
    text: message,
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      return res.status(201).json({
        email: req.body.email,
        message: req.body.message,
        subject: req.body.subject,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error,
      });
    });
};
export default sendEmail;
