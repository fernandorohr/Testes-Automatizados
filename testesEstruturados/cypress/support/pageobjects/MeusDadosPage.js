/// <reference types="Cypress" />

import MeusDadosElements from '../elements/MeusDadosElements'
const meusDadosElements = new MeusDadosElements

class MeusDadosPage {
  verificarDadosMinhaConta() {
    cy.get(meusDadosElements.loginTextActived()).contains('ISAAC')
    cy.get(meusDadosElements.loginMenuDropdown()).trigger('mouseenter')
    cy.contains('Minha Conta').should('be.hidden').invoke('show').click( {force:true} )   
    cy.get(meusDadosElements.sectionData()).should('be.visible')
    cy.contains('CARTÕES DE CRÉDITO').should('be.visible').wait(1000).click()
    cy.get(meusDadosElements.uploadData()).should('be.hidden')
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
