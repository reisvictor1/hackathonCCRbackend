const studentProgressController = require('../controllers/student_progress')
const express = require('express')
const router = express.Router()


router.get('/students/:id/progresses', studentProgressController.getStudentProgresses)
router.get('/students/:id/progress', studentProgressController.getOneStudentProgress)
router.post('/progress', studentProgressController.createStudentProgress)
router.post('/videos/progress', studentProgressController.addWatchedVideo)


module.exports = router