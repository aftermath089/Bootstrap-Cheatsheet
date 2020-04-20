const http = require('http')

// create server object
http.createServer((req, res) => {
    res.write('helloworld')
    res.end()
}).listen(8000, () =>{
    console.log('server running')
})