const express = require('express')
const path = require('path')
const users = require('./Users.js')
const logger = require('./middleware/logger.js')

const app = express()
const PORT = process.env.PORT || 8000

// init middleware
app.use(logger)

//static folder routing
app.use(express.static(path.join(__dirname, 'public')))

// get all user
app.get('/api/users', (req, res) => {
    res.json(users)
})

//get single user
app.get('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: 'Member not found' })
    }
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})