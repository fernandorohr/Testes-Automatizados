/// <reference types="Cypress" />

import carregamentoHomeElements from '../elements/carregamentoHomeElements'
const CarregamentoElements = new carregamentoHomeElements
const url = Cypress.config("baseUrl")

class carregamentoHome{
    //Acessa o Site
    acessarSite(){
        cy.visit(url)
    }
    

    visualizarElementos(){
        //Showcase
        cy.get(CarregamentoElements.showcase()).should('be.visible')
        //Banner
        cy.get(CarregamentoElements.banner()).should('be.visible')
        //NavBar
        cy.get(CarregamentoElements.navBar()).within(() => {
            cy.get(CarregamentoElements.subNavBar1()).should('be.visible')
            cy.get(CarregamentoElements.subNavBar2()).should('be.visible')
            cy.get(CarregamentoElements.subNavBar3()).should('be.visible')
            cy.get(CarregamentoElements.subNavBar4()).should('be.visible')
            cy.get(CarregamentoElements.subNavBar5()).should('be.visible')
            cy.get(CarregamentoElements.subNavBar6()).should('be.visible')
        })
        //Showcase - On Sale
        cy.get(CarregamentoElements.showcaseOnSale()).should('be.visible')
        //Showcase - New Items
        cy.get(CarregamentoElements.showcaseNewItem()).should('be.visible')
        //Footer
        cy.get(CarregamentoElements.footer()).should('be.visible')
        //Newsletter
        cy.get(CarregamentoElements.newsletter()).should('be.visible')
    }

    
    adicionarItem(){
        //Search and add to basket
        cy.get(CarregamentoElements.search()).click().type('fralda{enter}')
        cy.contains(CarregamentoElements.basket()).click()
        cy.visit('https://www.panvel.com/panvel/login.do')
    }
 
}


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})  

export default carregamentoHome;