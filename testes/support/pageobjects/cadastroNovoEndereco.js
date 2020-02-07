/// <reference types="Cypress" />

import carregamentoHomeElements from '../elements/carregamentoHomeElements'
const CarregamentoElements = new carregamentoHomeElements

class cadastroNovoEndereco {
    acessarUsuario(){
        cy.get(CarregamentoElements.loginUsuario()).click()
        cy.get(CarregamentoElements.usuario()).type('testedimed@gmail.com')
        cy.get(CarregamentoElements.senha()).type('teste123!')
        cy.get(CarregamentoElements.loginButton()).click()
    }
}

export default cadastroNovoEndereco;