var PRODUCT = require('../model/product')
var jwt = require('jsonwebtoken');  
exports.sequre = async function (req, res, next) {
    try {
        let token = req.headers.authoriztion
        if (!token) {
            throw new Error('please attacha a token')
        }
        var decoded = jwt.verify(token, 'AUTH')
        
        req.body.userID = decoded.id
        
        let usercheck = await PRODUCT.findById(decoded.id)
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
}

exports.create = async function(req, res, next) {
    try {
        
        let create = await PRODUCT.create(req.body)
        var token = jwt.sign({ id :create._id }, 'AUTH');

        res.status(201).json({
            status: "success.!!",
            message: "create successfully",
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

exports.find = async function(req, res, next) {
    try {
        let create = await PRODUCT.find().populate('userID')
        res.status(201).json({
            status: "success.!!",
            message: "find successfully",
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
        let create = await PRODUCT.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            status: "success.!!",
            message: "update successfully",
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
        let create = await PRODUCT.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: "success.!!",
            message: "delete successfully",
            create
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
        })
    }
};

