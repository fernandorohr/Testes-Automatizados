/* global Given, Then, When */

import carregamentoHome from '../pageobjects/carregamentoHome'
const CarregamentoHome = new carregamentoHome

Given("acessa o site", () =>{
    CarregamentoHome.acessarSite();
})


When("devo visualizar todos os elementos", () => {
    CarregamentoHome.visualizarElementos();
}) 

Then("devo adicionar um item ao carrinho", () => {
    CarregamentoHome.adicionarItem();
}) 