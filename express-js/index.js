const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})