// protect routes from illegal accessing without loggin in 

const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")

const protect = asyncHandler(async(req, res, next) => {
    let token 

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            // Get token from header
            token = req.headers.authorization.split(' ')[1]
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // get user from database using the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }
        catch (e){
            console.log(error)
            res.status(401)
            throw new Error("not authorized")
        }
    }

    if(!token) {
        res.status(401)
        throw new Error("not Authorized, no token")
    }
})

module.exports = {protect}