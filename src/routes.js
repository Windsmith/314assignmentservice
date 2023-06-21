const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/assignmentDashboard.html')
})

router.get('/assignment/:id', (req, res) => {
    res.sendFile(__dirname + '/pages/assignment.html')
})

router.get('/assignmentData/:id', (req, res) => {
    let id = req.params.id
    let assignments = JSON.parse(fs.readFileSync(__dirname + '/assignments.json'))
    assignments = assignments.filter((element) => {
        return element.id == parseInt(id, 10);
    })

    res.json(assignments[0])
})

router.get('/download', function (req, res) {
    const file = __dirname + '/static/studyMaterial.docx';
    res.download(file); // Set disposition and send it.
});

module.exports = router;