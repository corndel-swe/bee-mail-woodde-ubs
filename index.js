//const App = require('./app.js')
//const User = require('./user.js')
import App from "./app.js"
import User from "./user.js"

const app = new App()

const denise = new User(1, 'Denise')
const brad = new User(2, 'Brad')

denise.login(app)
brad.login(app)

denise.sendMessage(2, 'Hey Brad')
brad.readMessage(0)