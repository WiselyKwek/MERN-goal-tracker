const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require("colors")

const connectDB = require("./config/db")
connectDB() // run connection function


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// linking /api/goals to the goalRoutes file in routes folder
app.use("/api/goals", require("./routes/goalRoutes"))

// overrides the default error handler
app.use(errorHandler)

app.listen(port, () => {
    console.log("Server started on port: " + port)
})