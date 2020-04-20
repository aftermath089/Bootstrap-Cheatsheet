//const Logger = require('./logger')
// const Person = require('./person.js')

// const person = new Person('name', 30)
// console.log(person.greeting())

// const logger = new Logger()
// logger.on('message', (data) => {
//     console.log('called listener', data);
// })

// logger.log('hello world')


const http = require('http')
const path = require('path')
const fs = require('fs')

const PORT = 8000

const server = http.createServer((req, res) => {
    //ROUTE
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    if (req.url == '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            if (err) throw err
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }

    //REST API
    if(req.url == '/api/users'){
        const users = [
            { name : 'malele', age:12},
            { name : 'puele', age:14}
        ]

        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(users))
    }
})


server.listen(PORT, () => {
    console.log(`listening to port ${PORT}...`)
})