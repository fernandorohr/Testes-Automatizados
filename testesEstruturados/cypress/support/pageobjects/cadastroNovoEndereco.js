/// <reference types="Cypress" />

import cadastroEnderecoElements from '../elements/cadastroNovoEnderecoElements'
const CadastroEnderecoElements = new cadastroEnderecoElements

class cadastroNovoEndereco {
    //Faz login da conta do usuario
    acessarUsuario(){
        cy.get(CadastroEnderecoElements.loginUser()).click()
        cy.get(CadastroEnderecoElements.user()).type('testedimed@gmail.com')
        cy.get(CadastroEnderecoElements.password()).type('teste123!')
        cy.get(CadastroEnderecoElements.loginButton()).click()
    }


     //Add 'pastilha vick' to basket
     adicionarItem(){
        cy.get(CadastroEnderecoElements.search()).click().type('pastilha vick {enter}')
        cy.get(CadastroEnderecoElements.pastilhaVick()).click()
        cy.contains(CadastroEnderecoElements.buy()).click()
    }

    //Change Address
    mudarEndereco(){
        cy.get(CadastroEnderecoElements.delivery()).click()
        cy.get(CadastroEnderecoElements.deliveryButton()).click()
        cy.get(CadastroEnderecoElements.deliveryHome()).click()
        cy.get(CadastroEnderecoElements.addAddress()).click()

    }
}

export default cadastroNovoEndereco;