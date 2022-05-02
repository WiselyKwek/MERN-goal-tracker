const asyncHandler = require("express-async-handler")

const Goal = require("../model/goalsModel")
const User = require("../model/userModel")


// desc: get goals
// route: GET /api/goals/
// access: private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})

// desc: create goals
// route: POST /api/goals/
// access: private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// desc: update goals
// route: UPDATE /api/goals/
// access: private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    // retrieve user from db using user id
    const user = await User.findById(req.user.id)

    // check for user if user exists
    if(!user){
        res.status(401)
        throw new Error("User does not exist")
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401).json({"goal":goal.user, "user":user.id})
        throw new Error("user not authorized")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedGoal)
})

// desc: delete goals
// route: DELETE /api/goals/:id
// access: private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    // retrieve user from db using user id
    const user = await User.findById(req.user.id)


     // check for user if user exists
    if(!user){
        res.status(401)
        throw new Error("User does not exist")
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401).json({"goal":goal.user, "user":user.id})
        throw new Error("user not authorized")
    }

    await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}