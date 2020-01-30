///<reference types="Cypress" />

describe("retirar na loja", function(){
    it("retirar item na loja física", function(){
        // Access user ISAAC
        cy.visit("https://www.panvel.com")
        cy.wait(1000)
        cy.reload(true)
        cy.wait(1000)
        cy.get('span[class="navbar__menu-login--text"]').click()
        cy.wait(1000)
        cy.get('input[id="input-usuario"]')
          .type('testedimed@gmail.com')         
        cy.get('input[name="senha"]').type('teste123!')
        cy.wait(500)
        cy.get('button[id="btn-next-step"]').click()
        cy.get('span[class="navbar__menu-login--text nav-menu__item--actived"]').contains('ISAAC')
        cy.wait(500)
        // Choose the product and add it to cart
        cy.get('[name = search]').click().type('pastilha vick')
        cy.wait(1200)
        cy.get('[name = search]').click().type('{enter}')
        cy.get('a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]').click()
        cy.contains('COMPRAR').click()
        cy.wait(1200)
        cy.get('a[href="/panvel/informarEntrega.do"]').click({timeout:650000})
        cy.wait(3000)
        cy.get('button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]').click()
        cy.wait(500)
        cy.get('button[data-entrega="RETIRADA_BALCAO"]').click()
        cy.wait(1000)
        cy.get('select[name="select-cidade-loja"]').select('TAQUARA')
        cy.wait(1000)
        cy.get('button[data-nome-filial="PANVEL NOVA DE TAQUARA"]').click()
        cy.wait(1000)
        cy.get('button[data-click="confirmarEntregaBalcao"]').click()
        cy.wait(1000)
        cy.get('button[data-click="checkout-pagamento"]').click()
        cy.wait(1000)
        cy.get('button[data-pagamento="CARTAO_CREDITO"]').click()
        cy.wait(1000)   
        cy.get('input[id="input-card-number"]').type('4916823881703714')
        cy.wait(500)
        cy.get('select[name="input-card-month-expiry"]').select('05')
        cy.wait(500)
        cy.get('select[name="input-card-expiry"]').select('2020')
        cy.wait(500)        
        cy.get('input[name="input-card-cvc"]').type('297')
        cy.wait(500)
        cy.contains('CONFIRMAR PAGAMENTO').click()
        cy.wait(1000)
        cy.get('button[id="btn-finalizar-compra"]').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
    })
})