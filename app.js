const Player = require('./src/player.js')
const Game = require('./src/game.js')

const express = require('express')
const app = express()
const port = 3000

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))


app.set('views', './views')
app.set('view engine', 'ejs')

const index=require('./controllers/index.js')
app.use('/', index)

const gameplay=require('./controllers/game.js')
app.use('/', gameplay)

const attack=require('./controllers/attack.js')
app.use('/', attack)

const conf=require('./controllers/confirmation.js')
app.use('/', conf)

const sleep=require('./controllers/sleep.js')
app.use('/', sleep)

const heal=require('./controllers/heal.js')
app.use('/', heal)

const again=require('./controllers/playAgain.js')
app.use('/', again)

const poison=require('./controllers/poison.js')
app.use('/', poison)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})