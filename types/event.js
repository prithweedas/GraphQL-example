const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
    name: 'event',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        date: {
            type: GraphQLString
        }
    })
})