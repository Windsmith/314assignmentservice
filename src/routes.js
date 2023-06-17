const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/assignmentDashboard.html')
})

router.get('/assignment', (req, res) => {
    res.sendFile(__dirname + '/pages/assignment.html')
})

module.exports = router;