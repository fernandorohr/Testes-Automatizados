/* global Given, Then, When */

import CadastroNovoEnderecoPage from '../pageobjects/CadastroNovoEnderecoPage'
import GlobalPage from '../pageobjects/GlobalPage'
const cadastroNovoEndereco = new CadastroNovoEnderecoPage
const globalPage = new GlobalPage

Given ("acesso o site Panvel", () => {
    globalPage.acessarSite();
})

When ("acesso minha conta", () => {
    globalPage.loginUsuario();
})

And ("adiciona um produto ao carrinho", () => {
    cadastroNovoEndereco.adicionarItem();
})

Then ("cadastra novo endereco", () => {
    cadastroNovoEndereco.novoEndereco();
})
