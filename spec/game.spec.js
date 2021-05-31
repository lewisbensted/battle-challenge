const Game=require('./../src/game.js')

class Player {
    constructor(name, hp = 100) {
        this.name=name
        this.hp = hp
    }
    takeHit(amount=10){
        this.hp-=amount
    }
}

let game, player1, player2

describe('check game class', function(){
    it('check swap function', function(){
        //SETUP
        player1=new Player('Lewis')
        player2=new Player('Petra')
        game=new Game([player1, player2])

        //EXECUTE
        game.swap()

        //VERIFY
        expect(game.players[0].name).toBe('Petra')
        expect(game.players[1].name).toBe('Lewis')
    })
    it('check attack function', function(){
        spyOn(global.Math, 'random').and.returnValue(0.45)
        //SETUP
        player1=new Player('Lewis')
        player2=new Player('Petra')
        game=new Game([player1, player2])

        //EXECUTE
        game.attack()

        //VERIFY
        expect(game.players[1].hp).toBe(95)
    })
    it('check both functions', function(){
        spyOn(global.Math, 'random').and.returnValue(0.45)
        //SETUP
        player1=new Player('Lewis')
        player2=new Player('Sophie')
        game=new Game([player1, player2])

        //EXECUTE
        game.attack()
        game.swap()
        game.attack()
        game.swap()
        game.attack()

        //VERIFY
        expect(game.players[1].hp).toBe(90)
    })
})



