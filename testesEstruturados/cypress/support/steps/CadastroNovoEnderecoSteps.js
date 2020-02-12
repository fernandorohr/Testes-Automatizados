/* global Given, Then, And, When */

import CadastroNovoEnderecoPage from '../pageobjects/CadastroNovoEnderecoPage'
import GlobalPage from '../pageobjects/GlobalPage'
const cadastroNovoEnderecoPage = new CadastroNovoEnderecoPage
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

Then ("cadastra novo endereco", () => {
    cadastroNovoEnderecoPage.novoEndereco();
})
