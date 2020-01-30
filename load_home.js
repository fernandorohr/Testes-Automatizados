describe("Pagina", function(){
    it("testa elementos carregados", function(){
        cy.visit("http://www.panvel.com")
        
        //Testa se a vitrine foi carregada.
        //cy.get('div[class="vitrine-container"]').should('be.visible')
       // cy.get('section[class="vitrine-section"]').should('be.visible')

        //Testa se o footer foi carregado.
        //cy.get('footer[class="footer"]').should('be.visible')
        
    })
})  