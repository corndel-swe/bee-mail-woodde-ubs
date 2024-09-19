import { v4 as uuidv4 } from 'uuid'

class Message {
    constructor(from, to, content) {
        this.id = uuidv4()
        this.datetime = new Date()
        this.content = content
        this.from = from
        this.to = to
        this.delivered = false
        this.read = false
    }

    markDelivered() {
        this.delivered = true
        console.log(`Message has been delivered to ${this.to.username}`)
    }

    markRead() {
        this.read = true
        console.log(`Message has been read by ${this.to.username}`)
    }

    log() {
        console.log(`Message from ${this.from.username} to ${this.to.username}: "${this.content}"`)
        console.log(`Sent on ${this.datetime}`)
        console.log(`Delivered ${this.delivered}, Read ${this.read}`)
    }
}

//module.exports = Message
export default Message