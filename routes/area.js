const areaController = require('../controllers/area') 
const express = require('express')
const router = express.Router()

router.get('/area', areaController.getAllArea)

router.post('/area', areaController.createArea)

router.delete('/area/:name', areaController.deleteArea)


module.exports = router