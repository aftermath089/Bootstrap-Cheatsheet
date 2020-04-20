const Logger = require('./logger')
// const Person = require('./person.js')

// const person = new Person('name', 30)
// console.log(person.greeting())

const logger = new Logger()
logger.on('message', (data) => {
    console.log('called listener', data);
})

logger.log('hello world')