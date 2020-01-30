///<reference types="Cypress" />

describe("teste carregamento home", function(){
    it("testa elementos carregados", function(){
        cy.visit("http://www.panvel.com")        
        //vitrine
        cy.get(".slideshow").find("picture>img").should("be.visible")        
        //banner
        cy.get('img[class="banner-vacinas-img"]').should('be.visible')
        //imagens mais vendidos
        cy.get('div[data-vitrine-name="Mais Populares"]').find('img').each(($x) => {cy.get($x).should('be.visible')})
        //imagens Novidades
        cy.get('div[data-vitrine-name="Novidades"]').find('img').each(($x) => {cy.get($x).should('be.visible')})        
        //footer carregado
        cy.get('footer[class="footer"]').should('be.visible')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })    
    })
})