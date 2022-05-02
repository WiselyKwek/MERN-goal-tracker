// desc: get goals
// route: GET /api/goals/
// access: private
const getGoals = (req, res) => {
    res.status(200).json({"message": "Get Goals"})
}

// desc: create goals
// route: POST /api/goals/
// access: private
const setGoal = (req, res) => {
    res.status(200).json({"message": "set Goals"})
}

// desc: update goals
// route: UPDATE /api/goals/
// access: private
const updateGoal = (req, res) => {
    res.status(200).json({"message": "update Goals"})
}

// desc: delete goals
// route: DELETE /api/goals/:id
// access: private
const deleteGoal = (req, res) => {
    res.status(200).json({"message": "delete Goals"})
}

module.exports = {
    getGoals
}