var USERS = require('../model/users')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
try {
    let token = req.headers.authorization
    if (!token) {
        throw new Error('token miss match')
    }
    var decoded = jwt.verify(token, 'AUTH')
    decoded.id = userID
    let usercheck = await USERS.findById(decoded.id)
    if (!usercheck) {
        throw new Error('user not found')
    }
    next()
    
} catch (error) {
    res.status(404).json({
        status: "fail",
        message:error.message
    })
}
};

exports.register = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let create = await USERS.create(req.body)
        var token = jwt.sign({ id : create._id }, 'AUTH');

  
        res.status(201).json({
            status: "success..!!",
            message: "create successfull",
            create,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
      })
    }
};
exports.login = async function(req, res, next) {
    try {
        
        let usercheck = await USERS.findOne({ email: req.body.email })
        if (!usercheck) {
            throw new Error('user not found')
        }
        let passverify = await bcrypt.compare(req.body.password, usercheck.password)
        if (!passverify) {
            throw new Error('password invaild')
        }
        var token = jwt.sign({ id : usercheck._id }, 'AUTH');


  
        res.status(201).json({
            status: "success..!!",
            message: "login successfull",
            usercheck,
            token
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
        
        let create = await USERS.findByIdAndUpdate(req.params.id,req.body,{new:true})
       
       
        res.status(200).json({
            status: "success..!!",
            message: "update successfull",
            create
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
      })
    }
};
exports.delete = async function(req, res, next) {
    try {
        
        let create = await USERS.findByIdAndDelete(req.params.id)
       
       
        res.status(201).json({
            status: "success..!!",
            message: "delete successfull",
            create
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
      })
    }
  };
  