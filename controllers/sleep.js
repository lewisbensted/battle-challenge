const express = require('express')
const router = express.Router()
const app = express()


router.post('/sleep', (req,res)=> {
    let game=req.app.locals.game
    let damage, message, asleep
    if (game.playing) {
         damage= game.attack(4)
         asleep=game.sleep()
         if (asleep){
            message = `${game.players[0].name} attacks ${game.players[1].name} ${damage}. Sends to sleep`
         } else {
            message = `${game.players[0].name} attacks ${game.players[1].name} ${damage}.`
         }  
         if (!game.playing){
            message=`${game.players[0].name} Wins`
         }
    }

    res.render('confirmation.ejs', {game:game, message:message})
})


module.exports=router