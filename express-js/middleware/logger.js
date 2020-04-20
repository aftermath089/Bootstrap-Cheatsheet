// create middleware (middleware has access to every request and response)
const moment = require('moment')

const logger = (req, res, next) => {
    console.log(`${moment().format()}:${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next()
}

module.exports = logger