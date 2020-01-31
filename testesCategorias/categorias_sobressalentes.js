describe('Categorias Sobressalentes', function () {
    var tamanhoSubCategoria;
    it('Acessa Panvel', function () {
        cy.visit('https://www.panvel.com/panvel/main.do')
    })
    it('Categoria Oferta', function () {
        cy.get('[data-subcategory="ofertas"] ul li').then(($subCategoria) => {
            tamanhoSubCategoria = $subCategoria.length;
            for (let i = 0; i < tamanhoSubCategoria; i++) {
                cy.subCategoria(i, "ofertas")
                cy.wait(500)
            }
        })
    })
    it('Categoria Conveniência', function () {
        cy.get('[data-subcategory="31181"] ul li').then(($subCategoria) => {
            tamanhoSubCategoria = $subCategoria.length;
            for (let i = 0; i < tamanhoSubCategoria; i++) {
                cy.subCategoria(i, 31181)
                cy.wait(500)
            }
        })
    })
    it('Categoria Saúde Sexual', function () {
        cy.get('[data-subcategory="32414"] ul li').then(($subCategoria) => {
            tamanhoSubCategoria = $subCategoria.length;
            for (let i = 0; i < tamanhoSubCategoria; i++) {
                cy.subCategoria(i, 32414)
                cy.wait(500)
            }
        })
    })
    it('Categoria Cuidados com Pet', function () {
        cy.get('[data-subcategory="33626"] ul li').then(($subCategoria) => {
            tamanhoSubCategoria = $subCategoria.length;
            for (let i = 0; i < tamanhoSubCategoria; i++) {
                cy.subCategoria(i, 33626)
                cy.wait(500)
            }
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})