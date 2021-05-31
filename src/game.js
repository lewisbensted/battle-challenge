class Game{
    constructor(players=[], playing = true){
        this.players = players
        this.playerOrder=[players[0], players[1]]
        this.playing = playing
    }

    attack(max){
        let damage=Math.floor((Math.random() *max) + 1);
        this.players[1].takeHit(damage)

        if (this.players[1].isDead) {
             this.playing = false
        }
        return damage
    }
    sleep(){
        let chance = Math.floor((Math.random() * 10) + 1)
        if (chance<=3){
            this.players[1].isAsleep=true
            return true
        }
        return false
    }

    swap(){
        this.players.reverse()
        return this.players
    }
    swapOrder(){
        this.playerOrder.reverse()
        return this.playerOrder
    }
}

module.exports=Game