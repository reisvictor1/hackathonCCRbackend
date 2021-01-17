const  opportunitiesController = require('../controllers/job_opportunity') 
const express = require('express')
const router = express.Router()


router.get('/job-opportunities',  opportunitiesController.getOpportunities)
router.get('/job-opportunities/:id', opportunitiesController.getOneJob)
router.get('/work-cities', opportunitiesController.getAllWorkCities)

router.post('/job-opportunities',  opportunitiesController.createOpportunity)

router.delete('/job-opportunities',  opportunitiesController.deleteOpportunity)


module.exports = router