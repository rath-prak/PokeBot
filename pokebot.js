const config = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')
const recast = require('recastai')

const recastClient = new recast.Client(config.recast)

// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: config.appId,
  appPassword: config.appPassword,
})
const bot = new builder.UniversalBot(connector)

// Event when Message received
bot.dialog('/', (session) => {
  recastClient.textRequest(session.message.text)
  .then(res => console.log(res))
  .catch(() => session.send('I need some sleep right now... Talk to me later!'))
})

// Server Init
const server = restify.createServer()
server.listen(8080)
server.post('/', connector.listen())

