const Player = require("../../src/player")

describe('Checks Battle Game', function(){
    beforeEach(()=>{cy.visit('/')})
    it('Checks greeting', function(){
        cy.contains('Welcome to Battle')
    })

    it('Check players names and points are displayed', function(){
        cy.get('#textbox1').type('Lewis')
        cy.get('#textbox2').type('Sophie')
        cy.get('#submit').click()
        cy.get('#player1').contains('Player 1: Lewis Points: 30')
        cy.get('#player2').contains('Player 2: Sophie Points: 30')
        cy.url().should('include', '/game')
    })

    it('Checks confirmation is displayed', function() {
        cy.get('#textbox1').type('Lewis')
        cy.get('#textbox2').type('Petra')
        cy.get('#submit').click()
        cy.get('#message').contains("Lewis's Turn")
        cy.get('#attack').click()
        cy.get('#confirmation').contains('Lewis attacks Petra')

    })

    xit('Checks turns alternate and this is displayed', function() {
        cy.get('#textbox1').type('Lewis')
        cy.get('#textbox2').type('Sophie')
        cy.get('#submit').click()
        cy.contains("Lewis's Turn")
        cy.get('#attack').click()
        cy.get('ok').click()
        cy.contains("Sophie's Turn")
    })

    xit('Checks when players attack hp reduces by 10', function() {
        cy.get('#textbox1').type('Lewis')
        cy.get('#textbox2').type('Sophie')
        cy.get('#submit').click()
        cy.get('#player2').contains('Player 2: Sophie Points: 90')
        cy.contains("Sophie's Turn")
        cy.get('#attack').click()
        cy.get('#player1').contains('Player 1: Lewis Points: 90')
    })

    xit('Checks hp doesnt go below 0', function() {
        cy.get('#textbox1').type('Lewis')
        cy.get('#textbox2').type('Sophie')
        cy.get('#submit').click()
        for(let i = 0; i < 17; i++) {
            cy.get('#attack').click()}
        cy.contains('Player 2: Sophie Points: 0')
        cy.get('#attack').click()
        cy.get('#attack').click()
        cy.contains('Player 2: Sophie Points: 0')
    })
})