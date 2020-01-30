describe('Teste de Navegação', function(){
    it('Acessa', function(){
        cy.visit('https://panvel.com')
        cy.get('[name = search]').click().type('fralda{enter}')
        //cy.scrollTo(0,5000)
        cy.contains('ADICIONAR À CESTA').click()
        cy.visit('https://www.panvel.com/panvel/login.do')
    })
})