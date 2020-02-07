/// <reference types="Cypress" />

import QuantidadeResultadosElements from '../elements/QuantidadeResultadosElements'
const quantidadeResultadosElements = new QuantidadeResultadosElements
const url = Cypress.config("baseUrl")

class QuantidadeResultadosPage {
  acessarSite() {
    cy.visit(url)
  }

  pesquisarProduto() {
    cy.get(quantidadeResultadosElements.pesquisarProduto())
      .type('desodorante{enter}')
      .should('have.value', 'desodorante')
  }

  quantidadeProdutosBusca() {
    cy.get(quantidadeResultadosElements.buscaProdutos()).children().its('length').should('be.at.least', 15)
  }
}

export default QuantidadeResultadosPage;
