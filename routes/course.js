const courseController = require('../controllers/course') 
const express = require('express')
const router = express.Router()

router.get('/course', courseController.getAllCourses)
router.get('/course/:id', courseController.getOneCourse)

router.post('/course', courseController.createCourse)

router.delete('/course/:id', courseController.deleteCourse)


module.exports = router