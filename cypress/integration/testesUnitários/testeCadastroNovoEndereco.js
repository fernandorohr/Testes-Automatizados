///<reference types="Cypress" />

describe("cadastrar novo endereco", function(){
    it("cadastrar novo endereco", function(){
        //Acessa o usuário ISAAC
        cy.visit("https://www.panvel.com")
        cy.get('span[class="navbar__menu-login--text"]').click()
        cy.wait(1000)
        cy.get('input[id="input-usuario"]')
          .type('testedimed@gmail.com')         
        cy.get('input[name="senha"]').type('teste123!')
        cy.wait(500)
        cy.get('button[id="btn-next-step"]').click()
        cy.get('span[class="navbar__menu-login--text nav-menu__item--actived"]').contains('ISAAC')
        cy.wait(500)
       //Escolhe o produto e adiciona ao carrinho
        cy.get('[name = search]').click().type('pastilha vick{enter}')
        cy.get('a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]').click()
        cy.contains('COMPRAR').click()
        cy.wait(1200)
        cy.get('a[href="/panvel/informarEntrega.do"]').click({timeout:30000})
        cy.wait(1200)
        cy.get('button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]').click()
        cy.wait(500)
        cy.get('button[data-entrega="RECEBER_EM_CASA"]').click()
        cy.wait(1000)
        cy.get('a[href="/panvel/adicionarEndereco.do?redirect=informarEntrega.do"]').click()
        cy.wait(1000)
        // Cadastro do novo endereço
        cy.get('[name="enderecoIdentificador"]')
          .type('Rua do Isaac')         
        cy.get('[id="input-cep"]').type('95612150')
        cy.get('[id="input-enderecoNumero"]').type('4500')
        cy.get('[name="enderecoComplemento"]').type('Casa')
        cy.get('[name="enderecoReferencia"]').type('ERS 115')
        cy.wait(1000)
        cy.contains("Adicionar Endereço").click()
        cy.wait(1000) 

        Cypress.on('uncaught:exception', (err,runnable)=>{
          return false
        })
    })
})