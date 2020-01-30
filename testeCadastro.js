///<reference types="Cypress" />

var Chance = require('chance');
var chance = new Chance();

var randomstring = require("randomstring");

var randomEmail = require('random-email');

const CPF = require('cpf-check');

describe("efetuar cadastro", function(){
    it("efetuar cadastro", function(){
        cy.visit("https://www.panvel.com")
        cy.wait(1000)
        cy.reload(true)
        cy.wait(1000)
        cy.get('span[class="navbar__menu-login--text"]').click()
        cy.wait(1000)
        cy.contains("Criar conta").click()
        cy.wait(1000)
        cy.get('input[name="nome"]').type(randomstring.generate(7))
        cy.wait(500)
        cy.get('input[name="cpf"]').type(CPF.generate())
        cy.wait(500)
        cy.get('input[id="input-email"]').type(randomEmail({ domain: 'teste.com' }))
        cy.wait(500)
        cy.get('input[name="senha"]').type('ISAAC123')
        cy.get('input[name="confirmarSenha"]').type('ISAAC123')
        
        cy.contains("Continuar").click()

        cy.wait(500)
        cy.get('input[id="input-data-nascimento"]').type('04051990')

        cy.get('input[id="input-ddd"]').type('51')

        cy.get('input[id="input-phone"]').type('999999999')

        cy.contains("Continuar").click()

        cy.get('input[name="enderecoIdentificador"]').type('casa')

        cy.get('input[id="input-cep"]').type('04843-425')

        cy.get('input[id="input-enderecoNumero"]').type('987')

        cy.contains("Continuar").click()       

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
})