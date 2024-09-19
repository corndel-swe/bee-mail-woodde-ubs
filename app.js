//const Message = require('./message')
import Message from "./message.js"


class App {
    constructor() {
        this.users = []
    }

    addUser(user) {
        this.users.push(user)
    }

    findUser(userId) {
        let user = this.users.find(u => u.id === userId)
        return user
    }

    deliverMessage(sender, recipientId, content) {
        const recipient = this.findUser(recipientId)
        if (recipient) {
            const message = new Message(sender, recipient, content)
            recipient.receiveMessage(message)
            message.markDelivered()
        } else {
            console.log('Recipient not found.')
        }
    }

}

//module.exports = App
export default App