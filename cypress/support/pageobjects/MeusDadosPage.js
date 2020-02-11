/// <reference types="Cypress" />

import MeusDadosElements from '../elements/MeusDadosElements'
const meusDadosElements = new MeusDadosElements
const url = Cypress.config("baseUrl")

class MeusDadosPage {
  acessarSite() {
    cy.visit(url)
  }

  acessarMinhaConta() {
    cy.get(meusDadosElements.loginUsuario()).click()
    cy.get(meusDadosElements.usuario()).type('testedimed@gmail.com')
    cy.get(meusDadosElements.senha()).type('teste123!')
    cy.get(meusDadosElements.loginButton()).click()
  }

  verificarDadosMinhaConta() {
    cy.get(meusDadosElements.sectionMeusDados()).should('be.visible')
    // TODO: Array para contains / Endereço
    cy.contains('CARTÕES DE CRÉDITO').should('be.visible').wait(1000).click()
    cy.get(meusDadosElements.atualizarMeusDados()).should('be.hidden')
    cy.contains('PEDIDOS').should('be.visible')
    cy.contains('ASSINATURAS').should('be.visible')
    cy.contains('CONVÊNIOS').should('be.visible')
    cy.contains('ÚLTIMA AVALIAÇÃO').should('be.visible')

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }
}

export default MeusDadosPage;
