/// <reference types="Cypress" />

import cadastroEnderecoElements from '../elements/cadastroNovoEnderecoElements'
import GlobalElements from '../elements/GlobalElements'
const CadastroEnderecoElements = new cadastroEnderecoElements
const globalElements = new GlobalElements

class cadastroNovoEndereco {
     //Add 'pastilha vick' to basket
     adicionarItem(){
        cy.get(globalElements.search()).click().type('pastilha vick {enter}')
        cy.get(CadastroEnderecoElements.pastilhaVick()).click()
        cy.contains("COMPRAR").click()
        cy.wait(1200)
    }

    //Change Address
    novoEndereco(){
        cy.get(CadastroEnderecoElements.delivery()).click()
        cy.get(CadastroEnderecoElements.deliveryButton()).click()
        cy.get(CadastroEnderecoElements.deliveryHome()).click()
        cy.get(CadastroEnderecoElements.addAddress()).click()
        cy.get(CadastroEnderecoElements.stName()).type('Rua do Isaac')
        cy.get(CadastroEnderecoElements.cep()).type('95612150')
        cy.get(CadastroEnderecoElements.houseNumber()).type('4500')
        cy.get(CadastroEnderecoElements.complement()).type('Casa')
        cy.get(CadastroEnderecoElements.reference()).type('ERS 115')
        cy.contains("Adicionar Endereço").click()

    }
}

export default cadastroNovoEndereco;