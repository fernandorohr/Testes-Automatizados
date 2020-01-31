describe('Produtos Panvel', function () {
    it('Acessa Panvel', function () {
        cy.visit('https://www.panvel.com/panvel/main.do')
    })
    it('Menu Categorias', function () {
        for (var j = 6; j <= 10; j++) {
            cy.categoria(j)
        }
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})