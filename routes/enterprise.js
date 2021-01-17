const enterpriseController = require('../controllers/enterprise') 
const express = require('express')
const router = express.Router()

router.get('/enterprise', enterpriseController.getEnterprises)

router.post('/enterprise', enterpriseController.createEnterprise)

router.delete('/enterprise', enterpriseController.deleteEnterprise)


module.exports = router