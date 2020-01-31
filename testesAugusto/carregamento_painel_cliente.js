///<reference types="Cypress" />

describe('painel cliente', () => {
    it('testa painel carregado', () => {
        cy.visit('http://www.panvel.com')
        cy.get('a[title="Login"]').click()
        cy.login('testedimed@gmail.com', 'teste123!')
        // Confere o usuário e acessa sua conta
        cy.get('span[class="navbar__menu-login--text nav-menu__item--actived"]').contains('ISAAC')
        cy.get('div[class="navbar__menu-login navbar__menu-login-dropdown"]').trigger('mouseenter')
        cy.contains('Minha Conta').should('be.hidden').invoke('show').click( {force:true} )       
        
        cy.get('div[class="results"]').should('be.visible')
        cy.contains('CARTÕES DE CRÉDITO').should('be.visible').wait(1000).click()

        cy.get('a[class="btn btn--no-bg btn--icon btn--icon--right btn--text-right"]').should('be.hidden')

        cy.contains('PEDIDOS').should('be.visible')
        cy.contains('ASSINATURAS').should('be.visible')
        cy.contains('CONVÊNIOS').should('be.visible')
        cy.contains('ÚLTIMA AVALIAÇÃO').should('be.visible')  

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        /*CARTÕES DE CRÉDITO
        PEDIDOS
        ENDEREÇOS
        ASSINATURAS
        CONVÊNIOS
        ÚLTIMA AVALIAÇÃO
        */
    })
})