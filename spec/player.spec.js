const Player=require('./../src/player.js')

let player

describe('Check player class', function(){
    it('Check takes hit', function(){
        player=new Player()

        expect(player.takeHit(5)).toBe(25)
    })
    it('Check player is dead if hp goes below zero', function(){
        player=new Player(5)

        player.takeHit(6)

        expect(player.isDead).toBeTrue()
    })
})