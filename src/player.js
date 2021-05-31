class Player {
    constructor(name, hp = 30) {
        this.name=name
        this.hp = hp
        this.isDead=false
        this.isAsleep=false
        this.isPoisoned=false
    }
    takeHit(amount){
        this.hp-=amount
        if (this.hp<=0){
            this.isDead=true
        }
        return this.hp
    }
    heal(max=3){
        let amount = Math.floor((Math.random() * max))
        this.hp+=amount
        return amount
    }
}

module.exports = Player