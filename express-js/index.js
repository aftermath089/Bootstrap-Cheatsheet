const express = require('express')
const path = require('path')
const users = require('./Users.js')

const app = express()
const PORT = process.env.PORT || 8000

//static folder routing
app.use(express.static(path.join(__dirname, 'public')))

// get all user
app.get('/api/users', (req, res) => {
    res.json(users)
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})