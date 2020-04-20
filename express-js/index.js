const express = require('express')
const path = require('path')

const logger = require('./middleware/logger.js')

const app = express()
const PORT = process.env.PORT || 8000

// init middleware
app.use(logger)

//static folder routing
app.use(express.static(path.join(__dirname, 'public')))

// user api routing
app.use('/api/users', require('./routes/api/usersRouter'))



app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})