class User {
    constructor(id, username) {
        this.id = id
        this.username = username
        this.inbox = []
        this.app = null

    }

    login(app) {
        this.app = app
        app.users.push(this)

    }

    sendMessage(recipientId, content) {
        if (this.app) {
            this.app.deliverMessage(this, recipientId, content)
        } else {
            console.log('User is not logged into any app')
        }
    }

    receiveMessage(message) {
        this.inbox.push(message)
        console.log(`${this.username} received a message from ${message.from.username}`)
    }

    readMessage(idx) {
        if (idx >= 0 && idx < this.inbox.length) {
            const message = this.inbox[idx]
            message.markRead()
            message.log()
        } else {
            console.log("Invalid message index.")

        }

    }
}

//module.exports = User
export default User
