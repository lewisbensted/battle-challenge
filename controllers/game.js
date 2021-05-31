const express = require('express')
const router = express.Router()
const app = express()

const Player = require('./../src/player.js')
const Game = require('./../src/game.js')


router.post('/game', (req,res)=>{
  let playerOne = new Player(req.body.player1)
  let playerTwo = new Player(req.body.player2)
  let game=new Game([playerOne, playerTwo])
  req.app.locals.game=game
  let message = `${game.players[0].name}'s Turn`
  res.render('game.ejs', {message:message, game:game})
})


module.exports=router