const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql')
const EventType = require('../types/event')
const Event = require("../db/event")
const getProjection = require('../utils/projection')

module.exports = {
    type: EventType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, args, _, fieldASTs) => {
        return new Promise((rsv, rej) => {
            const projection = getProjection(fieldASTs)

            Event.findById(args.id)
                .select(projection)
                .exec()
                .then(data => rsv(data))
                .catch(err => rej(err))
        })
    }
}