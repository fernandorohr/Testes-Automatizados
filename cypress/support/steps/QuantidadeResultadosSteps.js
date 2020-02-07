/* global Given, Then, When, And */

import QuantidadeResultadosPage from '../pageobjects/QuantidadeResultadosPage'
const quantidadeResultadosPage = new QuantidadeResultadosPage

Given("acesso o site Panvel", () => {
  quantidadeResultadosPage.acessarSite();
})

When("pesquiso por um produto", () => {
  quantidadeResultadosPage.pesquisarProduto();
})

Then("verifico a quantidade de produtos listados na busca", () => {
  quantidadeResultadosPage.quantidadeProdutosBusca();
})
