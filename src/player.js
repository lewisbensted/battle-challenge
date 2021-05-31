class Player {
    constructor(name, hp = 30) {
        this.name=name
        this.hp = hp
        this.isDead=false
        this.isAsleep=false
    }
    takeHit(amount){
        this.hp-=amount
        if (this.hp<=0){
            this.isDead=true
        }
        return this.hp
    }
}

module.exports = Player