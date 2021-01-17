const studentController = require('../controllers/student')
const express = require('express')

const router = express.Router()


router.get('/student', studentController.getAllStudents)
router.post('/student', studentController.createStudent)
router.delete('/student', studentController.deleteStudent)


module.exports = router