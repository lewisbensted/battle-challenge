const express = require('express')
const router = express.Router()
const app = express()

const Game = require('./../src/game.js')

router.post('/playAgain', (req, res)=>{
    let game = req.app.locals.game
    game=new Game(game.swapOrder())
    game.players[0].hp=35
    game.players[0].isDead=false
    game.players[1].hp=35
    game.players[1].isDead=false
    let message = `New game - ${game.players[0].name}'s Turn`
    req.app.locals.game=game
    res.render('game.ejs', {message:message, game:game})
})

module.exports=router