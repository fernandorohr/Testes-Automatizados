/// <reference types="Cypress" />

import CadastroNovoEnderecoElements from '../elements/CadastroNovoEnderecoElements'
import GlobalElements from '../elements/GlobalElements'
const cadastroEnderecoElements = new CadastroNovoEnderecoElements
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
<<<<<<< HEAD
    cy.wait(1500)
=======
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
>>>>>>> c200f7d0eca35405cdb43131ca0bf2748001a978
  }


  //Add 'pastilha vick' to basket
  adicionarItem(){
    //cy.get(cadastroEnderecoElements.loginTextActived()).contains('ISAAC')
    cy.get(globalElements.search()).click().type('pastilha vick {enter}')
    cy.get(cadastroEnderecoElements.pastilhaVick()).click()
    cy.contains("COMPRAR").click()
    cy.wait(1200)
  }

}

export default GlobalPage;
