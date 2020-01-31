describe("efetuar login", function(){

  
    it("Entrar na conta Isac", function(){ 
      
      cy.visit("http://www.panvel.com") 

      cy.get('a[title="Login"]').click() 
      cy.get('input[id="input-usuario"]')
        .type('testedimed@gmail.com')         
      cy.get('input[name="senha"]').type('teste123!')       
      cy.get('button[id="btn-next-step"]').click()
      cy.get('span[class="navbar__menu-login--text nav-menu__item--actived"]').contains('ISAAC')     
      
      cy.get('[name = search]').click().type('pastilha vick{enter}')
      cy.get('a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]').click()
      cy.contains('COMPRAR').click()
      cy.wait(1200)
      cy.get('a[href="/panvel/informarEntrega.do"]').click()
      cy.wait(1200)        
      cy.get('button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]').click()
      cy.wait(500)          
      cy.get('button[data-entrega="LOCKER"]').click()
      cy.get('button[data-identificador-locker="2"]').click()
      cy.get('button[data-click="confirmarEntregaLocker"]').click()
      cy.get('button[data-click="checkout-pagamento"]').click()
      cy.wait(1000)
      cy.get('button[data-pagamento="CARTAO_CREDITO"]').click()
      cy.wait(1000)
      
      cy.get('input[id="input-card-number"]').type('4916823881703714')
      cy.get('select[name="input-card-month-expiry"]').select('05')
      cy.get('select[name="input-card-expiry"]').select('2020')
      cy.get('input[name="input-card-cvc"]').type('297')
      cy.contains('CONFIRMAR PAGAMENTO').click()
      cy.get('button[id="btn-finalizar-compra"]').click()
     
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
})
