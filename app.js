const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')

const app = express()
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
app.use(
    '/graphql', graphqlHTTP((req, res, gql) => ({
        schema,
        graphiql: dev,
        pretty: dev
    }))
)

app.listen(PORT, err => {
    if (err) throw err
    console.log(`Server started on PORT: ${PORT}`)
})