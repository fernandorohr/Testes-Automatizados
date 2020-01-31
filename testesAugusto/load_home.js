///<reference types="Cypress"/>

describe("Teste carregamento home", function(){
    it("Testa elementos carregados", function(){
        cy.visit("http://www.panvel.com")
        
        //vitrine
        cy.get(".slideshow").find("picture>img").should("be.visible")
        
        //banner
        cy.get('img[class="banner-vacinas-img"]').should('be.visible')

        //navbar
        cy.get('.container-content').within((ul) => {
            cy.get('a[title="Ofertas"]').should('be.visible')
            cy.get('a[title="Entrega Gratis"]').should('be.visible')
            cy.get('a[title="retire em loja"]').should('be.visible')
            cy.get('a[title="Receba em 2 horas"]').should('be.visible')
            cy.get('a[title="12x sem juros"]').should('be.visible')
        })

        //imagens - Mais vendidos
        cy.get('div[data-vitrine-name="Mais Populares"]').find('img').each(($x) => {cy.get($x).should('be.visible')})

        //imagens - Novidades
        cy.get('div[data-vitrine-name="Novidades"]').find('img').each(($x) => {cy.get($x).should('be.visible')})
        
        //footer carregado
        cy.get('footer[class="footer"]').should('be.visible')
        cy.get('div[class="footer__newsletter-form"]').should('be.visible')
        
        //newsletter
        cy.get('form').within(() => {
            cy.get('input[name="email"]').should('be.visible')
            cy.get('button[class="btn btn--no-bg"]').should('be.visible')
        })        
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
    })
})