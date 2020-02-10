/// <reference types="Cypress" />

import MeusDadosElements from '../elements/MeusDadosElements'
const meusDadosElements = new MeusDadosElements

class MeusDadosPage {
  verificarDadosMinhaConta() {
    cy.get(meusDadosElements.loginTextActived()).contains('ISAAC')
    cy.get(meusDadosElements.menuLoginDropdown()).trigger('mouseenter')
    cy.contains('Minha Conta').should('be.hidden').invoke('show').click( {force:true} )   
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
