const mongoose = require('mongoose')
const dbAuth = {
    useMongoClient: true
}
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/graphql-example', dbAuth)

const connection = mongoose.connection

connection.on('close', () => {
    console.log("MongoDB connection closed")
    process.exit(0)
})

module.exports = mongoose