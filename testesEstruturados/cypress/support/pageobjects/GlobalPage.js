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
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }
}

export default GlobalPage;
