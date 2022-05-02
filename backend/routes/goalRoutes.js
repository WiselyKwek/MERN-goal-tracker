const express = require("express")
const router = express.Router()


// better practice to modularize the functions for each route in a separate folder
const { getGoals } = require("../controllers/goalController")


router.get("/",getGoals)

router.post("/", (req, res) => {
    res.status(200).json({
        "Message": "create goal"
    })
})

router.put("/:id", (req, res) => {
    res.status(200).json({
        "Message": `update goal with id: ${req.params.id}`
    })
})
router.delete("/:id", (req, res) => {
    res.status(200).json({
        "Message": `deleted goal with id: ${req.params.id}`
    })
})






module.exports = router