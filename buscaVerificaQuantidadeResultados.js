///<reference types="Cypress" />

describe('teste busca e-commerce panvel', function(){
    it('testa busca', () => {
        cy.visit("http://www.panvel.com")
        //faz a pesquisa
        cy.get('input[name="search"]')
          .type('desodorante{enter}')
          .should('have.value', 'desodorante')
         cy.wait(1000)
         //verifica a quantidade de resultados encontrados   
         cy.get('div[class="pure-g pure-g--relative search-result__products"]').children().its('length').should('be.at.least', 16)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})