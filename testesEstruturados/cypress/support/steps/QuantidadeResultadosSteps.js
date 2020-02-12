/* global Given, Then, When */

import QuantidadeResultadosPage from '../pageobjects/QuantidadeResultadosPage'
import GlobalPage from '../pageobjects/GlobalPage'
const quantidadeResultadosPage = new QuantidadeResultadosPage
const globalPage = new GlobalPage

Given("acesso o site Panvel", () => {
  globalPage.acessarSite();
})

When("pesquiso por um produto", () => {
  quantidadeResultadosPage.pesquisarProduto();
})

Then("verifico a quantidade de produtos listados na busca", () => {
  quantidadeResultadosPage.quantidadeProdutosBusca();
})
