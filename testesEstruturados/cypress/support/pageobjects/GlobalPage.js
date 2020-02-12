/// <reference types="Cypress" />

import GlobalElements from '../elements/GlobalElements'
const globalElements = new GlobalElements
const url = Cypress.config("baseUrl")

class GlobalPage {
  acessarSite() {
    cy.visit(url)
  }

  loginUsuario() {
    cy.get(globalElements.loginUser()).click()
    cy.get(globalElements.user()).type('testedimed@gmail.com')
    cy.get(globalElements.password()).type('teste123!')
    cy.get(globalElements.loginBtn()).click()
    cy.wait(1500)

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }

  adicionarProduto(){
    cy.get(globalElements.search()).click().type('pastilha vick {enter}')
    cy.get(globalElements.pastilhaVick()).click()
    cy.contains("COMPRAR").click()
    cy.wait(1200)
  }

  finalizarCompra() {
    cy.get(globalElements.payment()).click()
    cy.wait(1000)
    cy.get(globalElements.creditCard()).click()
    cy.wait(1000)
    cy.get(globalElements.cardNumber()).type('4916823881703714')    
    cy.get(globalElements.cardMonthExpiry()).select('05')    
    cy.get(globalElements.cardYearExpiry()).select('2020')
    cy.get(globalElements.cardCvc()).type('297')
    cy.contains('CONFIRMAR PAGAMENTO').click()
    cy.get(globalElements.checkout()).click()
  }
}

export default GlobalPage;
