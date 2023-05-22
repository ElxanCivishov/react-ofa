import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

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
  const { values, html } = req.body;
  var mailOptions = {
    from: "elxan.civishov@sarainvest.az",
    to: process.env.REACT_APP_SMTP_MAIL,
    subject: values.subject,
    html: html,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      res.status(201).send(info);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
export default sendEmail;
