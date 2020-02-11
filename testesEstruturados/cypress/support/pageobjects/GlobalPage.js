/// <reference types="Cypress" />

import GlobalElements from '../elements/GlobalElements'
const globalElements = new GlobalElements
const url = Cypress.config("baseUrl")

class GlobalPage {
  acessarSite() {
    cy.visit(url)
  }

  loginUsuario() {
    cy.get(globalElements.loginUsuario()).click()
    cy.get(globalElements.usuario()).type('testedimed@gmail.com')
    cy.get(globalElements.senha()).type('teste123!')
    cy.get(globalElements.loginButton()).click()
    cy.wait(1500)

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }

  adicionarItem(){
    //cy.get(cadastroEnderecoElements.loginTextActived()).contains('ISAAC')
    cy.get(globalElements.search()).click().type('pastilha vick {enter}')
    cy.get(globalElements.pastilhaVick()).click()
    cy.contains("COMPRAR").click()
    cy.wait(1200)
  }
}

export default GlobalPage;
