const {
    GraphQLNonNull
} = require('graphql')

const Eventtype = require('../types/event')
const EventInputType = require('../types/input/event')
const Event = require('../db/event')

module.exports = {
    type: Eventtype,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(EventInputType)
        }
    },
    resolve: (root, args) => {
        return new Promise((rsv, rej) => {
            const newEvent = new Event(args.data)

            newEvent
                .save()
                .then(data => rsv(data))
                .catch(err => rej(err))
        })
    }
}