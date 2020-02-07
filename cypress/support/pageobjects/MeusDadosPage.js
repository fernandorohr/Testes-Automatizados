/// <reference types="Cypress" />

import MeusDadosElements from '../elements/MeusDadosElements'
const meusDadosElements = new MeusDadosElements
const url = Cypress.config("baseUrl")

class MeusDadosPage {
  acessarSite() {
    cy.visit(url)
  }

  fazerLogin() {
    cy.get('span[class="navbar__menu-login--text"]').click()
    cy.wait(1000)
    cy.get('input[id="input-usuario"]')
      .type('testedimed@gmail.com')         
    cy.get('input[name="senha"]').type('teste123!')
    cy.wait(500)
    cy.get('button[id="btn-next-step"]').click()
  }
  
  acessarMinhaConta() {
    cy.get(meusDadosElements.textName()).contains('ISAAC')
    cy.get(meusDadosElements.dropDownNavbarName()).trigger('mouseenter')
    cy.contains('Minha Conta').should('be.hidden').invoke('show').click({ force:true }) 
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

    // Entender essa função
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }
}

export default MeusDadosPage;
