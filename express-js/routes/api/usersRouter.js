const express = require('express')
const router = express.Router()
const users = require('../../Users.js')
const uuid = require('uuid')

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

//create member
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v1(),
        name: req.body.name,
        age: req.body.age,
        status: 'active'
    }

    if (!req.body.name || !req.body.age) {
        return res.status(400).json({ msg: 'please input needed data' })
    }

    users.push(newUser)
    res.json(users)
})

// update member
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        const updateUser = req.body

        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name
                user.age = updateUser.age ? updateUser.age : user.age

                res.json({ msg: 'updated!' })
            }
        })
    } else {
        res.status(400).json({ msg: 'not found! ' })
    }
})

module.exports = router
