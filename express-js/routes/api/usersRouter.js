const express = require('express')
const router = express.Router()
const users = require('../../Users.js')

// get all user
router.get('/', (req, res) => {
    res.json(users)
})

//get single user
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: 'Member not found' })
    }
})

module.exports = router
