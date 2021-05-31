const express = require('express')
const router = express.Router()
const app = express()


router.post('/heal', (req,res)=> {
    let game=req.app.locals.game
    let damage, message, heal, poisonDamage
    if (game.playing) {
        damage= game.attack(5)
        heal=game.heal()
        message = `${game.players[0].name} attacks ${game.players[1].name} ${damage}, Heals: ${heal}`
        if (game.players[1].isPoisoned){
            poisonDamage=game.attack(Math.floor((Math.random() * 3)))
            message += `Poison Damage: ${poisonDamage}`
        }
        if (!game.playing){
            message=`${game.players[0].name} Wins`
        }
    }
    res.render('confirmation.ejs', {game:game, message:message})
})


module.exports=router