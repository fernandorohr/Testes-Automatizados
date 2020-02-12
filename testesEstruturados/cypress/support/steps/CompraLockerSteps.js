/* global Given, Then, And, When */

import CompraLockerPage from '../pageobjects/CompraLockerPage'
import GlobalPage from '../pageobjects/GlobalPage'
const compraLockerPage = new CompraLockerPage
const globalPage = new GlobalPage

Given ("acesso o site Panvel", () => {
    globalPage.acessarSite();
})

When ("acesso minha conta", () => {
    globalPage.loginUsuario();
})

And ("adiciona um produto ao carrinho", () => {
  globalPage.adicionarProduto();
})

And ("seleciona forma de entrega", () => {
  compraLockerPage.compraLocker();
})

Then ("finaliza a compra", () => {
  globalPage.finalizarCompra();
})
