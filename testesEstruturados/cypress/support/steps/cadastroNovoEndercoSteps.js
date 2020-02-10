/* global Given, Then, When */

import cadastroNovoEndereco from '../pageobjects/cadastroNovoEndereco'
import carregamentoHome from '../pageobjects/carregamentoHome'
const CadastroNovoEndereco = new cadastroNovoEndereco
const carregarSite = new carregamentoHome

Given ("acessa o site", () => {
    carregarSite.acessarSite();
})

When ("acessa a conta do usuario", () => {
    CadastroNovoEndereco.acessarUsuario();
})

And ("adiciona um produto ao carrinho", () => {
    CadastroNovoEndereco.adicionarItem();
})

Then ("cadastra novo endereco", () => {
    CadastroNovoEndereco.novoEndereco();
})