const fs = require('fs')
const path = require('path')

// create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if (err) throw (err)
//     console.log('folder created!')
// })

// create and write file
// fs.writeFile(path.join(__dirname, 'test', 'generated.txt'), 'content that is written', (err) => {
//     if (err) throw err
//     console.log('file created!')
//     callbackAppendFile
// })

// // append text to file
// callbackAppendFile = fs.appendFile(path.join(__dirname, 'test', 'generated.txt'), ' content that is appended', (err) => {
//     if (err) throw err
//     console.log('file created!')
// })

// // read text file
// fs.readFile(path.join(__dirname, 'test', 'generated.txt'), 'utf8', (err, data)=>{
//     if(err) throw err
//     console.log(data)
// })

// rename file
fs.rename(path.join(__dirname, 'test', 'generated.txt'),path.join(__dirname, 'test', 'renamed.txt'),(err)=>{
    if(err) throw err
    console.log('file renamed!')
})