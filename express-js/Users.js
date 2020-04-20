const uuid = require('uuid')
// mock data
const Users = [
    {id:uuid.v1(),name:'tsu',age:3,status : 'active'},
    {id:uuid.v1(),name:'ba',age:4,status : 'active'},
    {id:uuid.v1(),name: 'sa',age:5,status : 'active'}
]

module.exports = Users