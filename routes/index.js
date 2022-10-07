const express = require('express')
const router = express.Router()

router.use('/dummydata', require('./dummyData'))

module.exports = router