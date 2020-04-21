const express = require('express')
const path = require('path')
const logger = require('./middleware/logger.js')
const exphbs = require('express-handlebars')
const users = require('./Users.js')
const app = express()
const PORT = process.env.PORT || 8000

// init middleware
app.use(logger) //logger
app.use(express.json())//bodyparser
app.use(express.urlencoded({ extended: false })) //formsubmission

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// homepage route
app.get('/', (req, res) => {
    res.render('index', {
        title : 'User apap',
        users : users
    })
})

// //static folder routing
// app.use(express.static(path.join(__dirname, 'public')))

// user api routing
app.use('/api/users', require('./routes/api/usersRouter'))



app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})