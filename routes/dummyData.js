const express = require('express')
const router = express.Router()
const { dummyData } = require('../constant')

router.get('/', async (req, res) => {
    const { limit, firstname, age} = req.query
    if (limit) {
        const data = dummyData.slice(10 * (limit - 1), 10 * limit)
        return res.json({ tableData: data, tableCount: dummyData.length })
    } else if (firstname && age) {
        const data = dummyData.filter(user => user.firstname === firstname && user.age.toString() === age)
        if (data) return res.json(data)
        return res.json({ error: "Doesn't find the user" })
    } else  return res.json({ error: "Doesn't find the users" })
})

router.get('/all', async (req, res) => {
    return res.json(dummyData)
})

module.exports = router
