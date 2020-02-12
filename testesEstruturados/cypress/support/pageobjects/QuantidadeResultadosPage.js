/// <reference types="Cypress" />

import QuantidadeResultadosElements from '../elements/QuantidadeResultadosElements'
import GlobalElements from '../elements/GlobalElements'
const quantidadeResultadosElements = new QuantidadeResultadosElements
const globalElements = new GlobalElements

class QuantidadeResultadosPage {
  pesquisarProduto() {
    cy.get(globalElements.search())
      .type('desodorante{enter}')
      .should('have.value', 'desodorante')
  }

  quantidadeProdutosBusca() {
    cy.get(quantidadeResultadosElements.searchProducts()).children().its('length').should('be.at.least', 15)
  }
}

export default QuantidadeResultadosPage;
