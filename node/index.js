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

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    // //ROUTE
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.write(data)
    //         res.end()
    //     })
    // }

    // if (req.url == '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type':'text/html'})
    //         res.write(data)
    //         res.end()
    //     })
    // }

    // //REST API
    // if(req.url == '/api/users'){
    //     const users = [
    //         { name : 'malele', age:12},
    //         { name : 'puele', age:14}
    //     ]

    //     res.writeHead(200, {'Content-Type':'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    // build filepath
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    console.log(filepath)

    // extension of file (.html, .js, .css)
    let extname = path.extname(filepath)

    // init and content type
    let contentType = 'text/html' // default
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // readfile
    fs.readFile(filepath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    if(err) throw err
                    res.writeHead(200, 'text/html')
                    res.end(data, 'utf8')
                })
            }else{
                //other error
                res.writeHead(500)
                res.end(`server error: ${err.code}`)
            }
        }else{
            //success
            res.writeHead(200, contentType)
            res.end(data, 'utf8 ')
        }
    })
})


server.listen(PORT, () => {
    console.log(`listening to port ${PORT}...`)
})