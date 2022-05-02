// middleware function in the middle of the req, res cycle

// takes in the error object, req, res, next is for any further middleware
const errorHandler = (err, req, res, next) => {
    // res.statusCode is res.status(400) as set in the goalController.js
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

module.exports = {
    errorHandler 
}