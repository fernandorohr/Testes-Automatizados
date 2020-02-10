/* global Given, Then, When */

import CarregamentoHomePage from '../pageobjects/CarregamentoHomePage'
import GlobalPage from '../pageobjects/GlobalPage'
const carregamentoHomePage = new CarregamentoHomePage
const globalPage = new GlobalPage

Given("acesso o site Panvel", () =>{
    globalPage.acessarSite();
})

Then("devo visualizar todos os elementos", () => {
    carregamentoHomePage.visualizarElementos();
})
