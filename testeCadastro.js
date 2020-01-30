///<reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();


describe("efetuar cadastro", function(){
    it("efetuar cadastro", function(){
        cy.visit("https://www.panvel.com")
        cy.reload(true)
        cy.wait(500)
        cy.get('span[class="navbar__menu-login--text"]').click()
        cy.wait(1000)
        cy.contains("Criar conta").click()
        cy.get('input[name="nome"]').type(chance.name)
        cy.get('input[name="cpf"]').type(chance.cpf)
        cy.get('input[id="input-email"]').type(chance.email)
        cy.get('input[name="senha"]').type('ISAAC')
        cy.get('input[name="confirmarSenha"]').type('ISAAC')
        cy.get('button[id="btn-next-step"]').click()
    })
})