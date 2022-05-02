const asyncHandler = require("express-async-handler")

// desc: get goals
// route: GET /api/goals/
// access: private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({"message": "Get Goals"})
})

// desc: create goals
// route: POST /api/goals/
// access: private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    else{
        res.status(200).json({"message": "set Goals"})
    }
})

// desc: update goals
// route: UPDATE /api/goals/
// access: private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({"message": "update Goals"})
})

// desc: delete goals
// route: DELETE /api/goals/:id
// access: private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({"message": "delete Goals"})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}