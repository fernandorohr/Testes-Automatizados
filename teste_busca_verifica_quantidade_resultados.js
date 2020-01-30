///<reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe("teste busca e-commerce panvel", function(){
    it("testa busca", function(){
        cy.visit("http://www.panvel.com")
        cy.get('input[name="search"]')
          .type('desodorante{enter}')
          .should('have.value', 'desodorante')
         cy.wait(1000)
         
         cy.get('div[class="pure-g search-result__products"]').children().its('length').should('be.at.least', 20)
         
        
           
     

    })


})