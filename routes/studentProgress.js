const studentProgressController = require('../controllers/student_progress')
const router = require('./course')


router.get('/progress', studentProgressController.getStudentProgress)
router.post('/progress', studentProgressController.createStudentProgress)
router.post('/videos/progress', studentProgressController.addWatchedVideo)


module.exports = router