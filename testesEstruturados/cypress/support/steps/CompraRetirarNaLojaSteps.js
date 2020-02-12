/* global Given, Then, When, And */

import CompraRetirarNaLojaPage from '../pageobjects/CompraRetirarNaLojaPage'
import GlobalPage from '../pageobjects/GlobalPage'
const compraRetirarNaLojaPage = new CompraRetirarNaLojaPage
const globalPage = new GlobalPage

Given ("acesso o site Panvel", () => {
    globalPage.acessarSite();
})

When ("acessa minha conta", () => {
    globalPage.loginUsuario();
})

And ("adiciona um produto ao carrinho", () => {
    globalPage.adicionarProduto();
})

And ("seleciona forma de entrega", () => {
    compraRetirarNaLojaPage.compraRetirarNaLoja();
})

Then ("finaliza a compra", () => {
    globalPage.finalizarCompra();
})
