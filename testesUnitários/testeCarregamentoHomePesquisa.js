///<reference types="Cypress"/>

// Tests the loading of home page and the search

describe("testeCarregamentoHome", function() {
    it("Testa elementos carregados na Home", function(){
        cy.visit("http://www.panvel.com")

        // Showcase
        cy.get(".slideshow").find("picture>img").should("be.visible")

        // Banner
        cy.get('img[class="banner-vacinas-img"]').should('be.visible')

        // NavBar
        cy.get('.container-content').within(() => {
            cy.get('a[title="Bem Panvel"]').should('be.visible')
            cy.get('a[title="Ofertas"]').should('be.visible')
            cy.get('a[title="Entrega Gratis"]').should('be.visible')
            cy.get('a[title="Click & Retire"]').should('be.visible')
            cy.get('a[title="Receba em até 120 minutos"]').should('be.visible')
            cy.get('a[title="12x sem juros"]').should('be.visible')
        })

        // Showcase - On Sale
        cy.get('div[data-vitrine-name="Ofertas"]').find('img').each(($x) => {cy.get($x).should('be.visible')})

        // Showcase - News Items
        cy.get('div[data-vitrine-name="Novidades"]').find('img').each(($x) => {cy.get($x).should('be.visible')})

        // Footer
        cy.get('footer[class="footer pure-g"]').should('be.visible')
        cy.get('div[class="pure-u-1 footer-newsletter-form"]').should('be.visible')

        // Newsletter
        cy.get('form').within(() => {
            cy.get('input[name="email"]').should('be.visible')
            cy.get('button[class="btn btn--no-bg"]').should('be.visible')
        })
        
        // Search and add to basket
        cy.get('[name = search]').click().type('fralda{enter}')
        cy.contains('ADICIONAR À CESTA').click()
        cy.visit('https://www.panvel.com/panvel/login.do')

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
})
