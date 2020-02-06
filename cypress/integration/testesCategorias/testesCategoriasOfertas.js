describe('Categorias ofertas', function () {
    var tamanhoSubCategoria;
    it('Acessa Panvel', function () {
        cy.visit('https://www.panvel.com/panvel/main.do')
    })    
    it('Categoria Oferta', function () {
        cy.get('[data-subcategory="ofertas"] ul li').then(($subCategoria) => {
            tamanhoSubCategoria = $subCategoria.length;
            for (let i = 0; i < tamanhoSubCategoria; i++) {

                cy.get('ul[class="navbar__menu hide-sm"]').click()//abre aba categorias
                //sobreposição do mouse na categoria específicada
                cy.get('[data-category="ofertas"]').trigger('mouseenter')
                //acessa lista de subcategorias novamente e adquire um vetor da lista
                cy.get('[data-subcategory="ofertas"] ul li').then(($sub) => {
                    const conteudoSubCategoria = $sub;
                    var tamanhoProdutosCategoria = $sub.length;
                    cy.get(conteudoSubCategoria[i]).click()
                    
                    
                    cy.get('section[class="results results--filters"] div[class="pure-g pure-g--relative search-result__products"]').then(($conteudo) => {
                        tamanhoProdutosCategoria = $conteudo[0];
                        
                        console.log("TAMANHOPRODUTOSS")
                        console.log(tamanhoProdutosCategoria)
                
                        const $conteudoVetor = Cypress.$(tamanhoProdutosCategoria)        
                
                        const conteudoTamanho = $conteudoVetor.childElementCount;
                        console.log("Tamanho ")
                        console.log(conteudoTamanho)
                
                        console.log("A subcategoria possui : " + conteudoTamanho + " Produtos")
                        if (conteudoTamanho < 1) {
                            cy.url().then(($URL) => {
                                cy.writeFile('./paginasSemConteudo.txt', $URL.toString() + '\n', { flag: 'a+' })
                            })
                        }
                    })
                })
                cy.wait(500)
            }
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})