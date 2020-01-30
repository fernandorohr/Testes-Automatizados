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
        cy.get('input[name="nome"]').type('teste')
        cy.get('input[name="cpf"]').type('76742839090')
        cy.get('input[id="input-email"]').type('teste123@teste123.com')
        cy.get('input[name="senha"]').type('ISAAC123')
        cy.get('input[name="confirmarSenha"]').type('ISAAC123')
        cy.get('button[id="btn-next-step"]').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
})