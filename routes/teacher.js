const teacherController = require('../controllers/teacher')
const express = require('express')
const router = express.Router()


router.get('/teacher', teacherController.getTeachers)
router.post('/teacher', teacherController.createTeacher)
router.delete('/teacher', teacherController.deleteTeacher)

module.exports = router