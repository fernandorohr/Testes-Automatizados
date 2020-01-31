///<reference types="Cypress" />

describe('teste menu',   function(){
    it('testa menu categorias', function(){
        cy.visit('http://www.panvel.com')
        cy.contains('Categorias').should('be.visible').click()
        cy.wait(1000)
        cy.get('nav[class="nav nav-menu nav-menu--full nav-menu--full-category container-content actived"]')
          .should('be.visible')

        cy.get('div[class="pure-g"]').should('be.visible')
        cy.get('ul[class="nav-menu__items nav-menu__items--main"]').should('be.visible')        
        cy.get('li[data-category="1"]').should('be.visible').trigger('mouseenter')

        cy.get('nav[data-subcategory="1"]').should('be.visible')
        cy.wait(1000)
        cy.contains('Medicamentos Especiais')
          .click({force:true})
        cy.contains('Dermatologia').should('be.visible').click()
        cy.get('button[data-item="554980"]').click()
        
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
    })
})