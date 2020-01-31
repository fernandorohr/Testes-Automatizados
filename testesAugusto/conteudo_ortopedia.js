describe('Categorias testa Conteudo', function () {
    var tamanhoSubCategoria;
    it('Acessa Panvel', function () {
        cy.visit('https://www.panvel.com/panvel/main.do')
    })
    it('Categoria Ortopedia', function () {  
        cy.get('[data-subcategory="10"] ul li').then(($subCategoria) => {
            tamanhoSubCategoria = $subCategoria.length;
            for (let i = 0; i < tamanhoSubCategoria; i++) {
                cy.subCategoria(i, 10)
                cy.wait(500)
            }
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})