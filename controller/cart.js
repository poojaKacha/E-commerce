var CART = require('../model/cart')
var jwt = require('jsonwebtoken');

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "kachapooja06@gmail.com",
    pass: "vnxpznzxkvnhpzyd",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'kachapooja06@gmail.com', // sender address
    to: mail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "thank you for visit", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}




exports.create = async function (req, res, next) {
    try {
      let create = await CART.create(req.body)
      main(req.body.email)
        res.status(201).json({
            status: "success..!!",
            message: "create succssfully",
            create
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
     
}
exports.find = async function(req, res, next) {
    try {
      let create = await CART.find().populate(['productID','userID'])
      res.status(201).json({
        status: "success..!!",
        message: "find succssfully",
        create
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
     })
    }
     
};
  exports.update = async function(req, res, next) {
    try {
      let create = await CART.findByIdAndUpdate(req.params.id,req.body.id,{new:true})
      res.status(200).json({
        status: "success..!!",
        message: "update succssfully",
        create
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
     })
    }
     
};
  exports.delete =async function(req, res, next) {
    try {
      let create = await CART.findByIdAndDelete(req.params.id)
      res.status(201).json({
        status: "success..!!",
        message: "delete succssfully",
        create
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
     })
    }
     
   };
