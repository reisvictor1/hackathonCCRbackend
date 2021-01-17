const trailController = require('../controllers/trail') 
const express = require('express')
const router = express.Router()


router.get('/trail', trailController.getTrails)

router.post('/trail', trailController.createTrail)
router.post('/trail', trailController.addCourse)

router.delete('/trail', trailController.deleteTrail)


module.exports = router