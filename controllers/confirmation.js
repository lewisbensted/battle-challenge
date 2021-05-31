const express = require('express')
const router = express.Router()
const app = express()

router.post('/confirmation', (req,res)=>{
    let game=req.app.locals.game
    if (!game.players[1].isAsleep){
        game.swap()
    } else {
        game.players[1].isAsleep=false
    }
    let message=`${game.players[0].name}' Turn`
    res.render('game.ejs', {message:message, game:game})
})

module.exports=router