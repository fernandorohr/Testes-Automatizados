/// <reference types="Cypress" />

// Test that creates a new user, generating random information (name, cpf and email)
var randomstring = require("randomstring");
var randomEmail = require('random-email');
const CPF = require('cpf-check');

import CadastroNovoUsuarioElements from '../elements/CadastroNovoUsuarioElements'
import GlobalElements from '../elements/GlobalElements'
const cadastroNovoUsuarioElements = new CadastroNovoUsuarioElements
const globalElements = new GlobalElements

class CadastroNovoUsuarioPage {
     acessarPaginaLogin(){
      cy.get(globalElements.loginUsuario()).click()
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    }

    criarConta(){
      cy.contains("Criar conta").click()
      cy.get(cadastroNovoUsuarioElements.name()).type(randomstring.generate(7))
      cy.get(cadastroNovoUsuarioElements.cpf()).type(CPF.generate())
      cy.get(cadastroNovoUsuarioElements.email()).type(randomEmail({ domain: 'teste.com' }))
      cy.get(globalElements.password()).type('ISAAC123')
      cy.get(cadastroNovoUsuarioElements.confirmPassword()).type('ISAAC123')
      cy.contains("Continuar").click()
      cy.get(cadastroNovoUsuarioElements.birth()).type('04051990')
      cy.get(cadastroNovoUsuarioElements.ddd()).type('51')
      cy.get(cadastroNovoUsuarioElements.phoneNumber()).type('999999999')
      cy.contains("Continuar").click()
      cy.get(globalElements.stName()).type('casa')
      cy.get(globalElements.cep()).type('04843-425')
      cy.get(globalElements.houseNumber()).type('987')
      cy.contains("Continuar").click()
    }
}

export default CadastroNovoUsuarioPage;
