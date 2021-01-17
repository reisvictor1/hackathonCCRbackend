const opportunityController = require('../controllers/job_opportunity') 
const express = require('express')
const router = express.Router()


router.get('/opportunity', opportunityController.getOpportunities)

router.post('/opportunity', opportunityController.createOpportunity)

router.delete('/opportunity', opportunityController.deleteOpportunity)


module.exports = router