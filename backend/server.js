const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

const app = express()


// linking /api/goals to the goalRoutes file in routes folder
app.use("/api/goals", require("./routes/goalRoutes"))



app.listen(port, () => {
    console.log("Server started on port: " + port)
})