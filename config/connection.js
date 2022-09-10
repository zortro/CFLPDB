const { connect, connection } = require('mongoose');

let userName = 'admin'
let userPass = 'admin'

const connectString = 
    process.env.MONGODB_URI || `mongodb+srv://${userName}:${userPass}@cflptst.cmwqvdh.mongodb.net/?retryWrites=true&w=majority`


connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection