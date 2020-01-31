///<reference types="Cypress" />

describe('teste menu', function(){
    it('testa menu categorias', function(){
        cy.visit('http://www.panvel.com')
        cy.contains('Categorias').should('be.visible').click()
        cy.wait(1000)
        cy.get('nav[class="nav nav-menu nav-menu--full nav-menu--full-category container-content actived"]')
          .should('be.visible')
        cy.get('div[class="pure-g"]').should('be.visible')
        cy.get('ul[class="nav-menu__items nav-menu__items--main"]').should('be.visible')
        cy.contains('Fitness').trigger('mouseenter')
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
    })
})
