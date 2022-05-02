const express = require("express")
const router = express.Router()


// better practice to modularize the functions for each route in a separate folder
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController")

const { protect } = require("../middleware/authMiddleware")

// router.get("/",getGoals)

// router.post("/", setGoal)

// router.put("/:id", updateGoal)

// router.delete("/:id", deleteGoal)


// If there are repeated routes with different methods, can use the router.route way
router.route("/").get(protect, getGoals).post(protect, setGoal)
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router