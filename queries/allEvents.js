const {
    GraphQLList
} = require('graphql')
const EventType = require('../types/event')
const Event = require("../db/event")
const getProjection = require('../utils/projection')

module.exports = {
    type: new GraphQLList(EventType),
    // args: {
    //     id: {
    //         name: 'id',
    //         type: new GraphQLNonNull(GraphQLID)
    //     }
    // },
    resolve: (root, args, options, fieldASTs) => {
        return new Promise((rsv, rej) => {
            const projection = getProjection(fieldASTs)

            Event.find({})
                .select(projection)
                .exec()
                .then(data => rsv(data))
                .catch(err => rej(err))
        })
    }
}