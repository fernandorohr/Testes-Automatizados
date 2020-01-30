///<reference types="Cypress" />



describe("efetuar login", function(){
    it("testa login", function(){
        
        //abre site e faz login
        cy.visit("http://www.panvel.com")        
        cy.get('a[title="Login"]').click()
        cy.wait(500)
        cy.get('input[id="input-usuario"]')
          .type('testedimed@gmail.com')         
        cy.get('input[name="senha"]').type('teste123!')
        cy.wait(500)
        cy.get('button[id="btn-next-step"]').click()
        cy.get('span[class="navbar__menu-login--text nav-menu__item--actived"]').contains('ISAAC')
        cy.wait(500)
        
        //realiza compra por boleto
        cy.get('[name = search]').click().type('pastilha vick{enter}')
        cy.get('a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]').click()
        cy.contains('COMPRAR').click()
        cy.wait(1200)
        cy.get('a[href="/panvel/informarEntrega.do"]').click()
        cy.wait(1200)        
        cy.get('button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]').click()
        cy.wait(500)
        cy.get('button[data-entrega="RECEBER_EM_CASA"]').click()
        cy.get('button[data-endereco-codigo="5449732"]').click()
        cy.wait(1000)        
        cy.get('div[class="checkout-entrega__buttons"]').should('be.visible').click()
        cy.wait(1000)
        cy.get('button[data-click="checkout-pagamento"]').click()
        cy.wait(1000)
        cy.get('button[data-pagamento="BOLETO"]').click()
        cy.wait(1000)
        cy.get('button[data-click="confirmarPagamentoBoleto"]').click()
        cy.wait(1000)
        cy.get('button[id="btn-finalizar-compra"]').click()
    })
})