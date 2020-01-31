//Função que realiza login 
Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('input[id="input-usuario"]').type(usuario)
    cy.get('input[name="senha"]').type(senha)
    cy.wait(500)
    cy.get('button[id="btn-next-step"]').click()
})
//Função que percorre divisão de categorias 
Cypress.Commands.add('categoria', (indiceCategoria) => {
    //acessa lista de subcategorias e adquire um vetor 
    cy.get('[data-subcategory=' + indiceCategoria + '] ul li').then(($sub) => {
        //a partir do vetor, se sabe a quantidade de subcategorias
        var tamanhoSubCategoria = $sub.length;
        //laço percorrendo toda lista de uma categoria
        for (var i = 0; i < tamanhoSubCategoria; i++) {
            cy.subCategoria(i, indiceCategoria)
            cy.wait(1000)
        }
    })
})
//Função que percorre uma lista de subcategorias
Cypress.Commands.add('subCategoria', (indiceSub, indiceCategoria) => {
    cy.get('ul[class="navbar__menu hide-sm"]').click()//abre aba categorias
    //sobreposição do mouse na categoria específicada
    cy.get('[data-category=' + indiceCategoria + ']').trigger('mouseenter')
    //acessa lista de subcategorias novamente e adquire um vetor da lista
    cy.get('[data-subcategory=' + indiceCategoria + '] ul li').then(($sub) => {
        const conteudoSubCategoria = $sub;
        var tamanhoProdutosCategoria = $sub.length;
        cy.get(conteudoSubCategoria[indiceSub]).click()
        cy.verificaConteudo(tamanhoProdutosCategoria)
    })
})

Cypress.Commands.add('verificaConteudo', (tamanhoProdutosCategoria, ) => {
    cy.get('section[class="results results--reduced"] div[class="pure-g"]').then(($conteudo) => {
        tamanhoProdutosCategoria = $conteudo[0];
        const $conteudoVetor = Cypress.$(tamanhoProdutosCategoria)
        const conteudoTamanho = $conteudoVetor.context.childElementCount;
        console.log("A subcategoria possui : " + conteudoTamanho + " Produtos")
        if (conteudoTamanho < 1) {
            cy.url().then(($URL) => {
                cy.writeFile('./paginasSemConteudo.txt', $URL.toString() + '\n', { flag: 'a+' })
            })
        }
    })
})