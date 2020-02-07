/* global Given, Then, When, And */

import MeusDadosPage from '../pageobjects/MeusDadosPage'
const meusDadosPage = new MeusDadosPage

Given("acesso o site Panvel", () => {
  meusDadosPage.acessarSite();
})

When("faço login no site Panvel", () => {
  meusDadosPage.fazerLogin();
})

Then("acesso minha conta", () => {
  meusDadosPage.acessarMinhaConta();
})

And("devo verificar os dados na minha conta", () => {
  meusDadosPage.verificarDadosMinhaConta();
})
