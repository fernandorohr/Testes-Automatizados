class CadastroNovoEnderecoElements {
    deliveryHome = () => { return 'button[data-entrega="RECEBER_EM_CASA"]' }
    addAddress = () => { return 'a[href="/panvel/adicionarEndereco.do?redirect=informarEntrega.do"]' }
    complement = () => { return '[name="enderecoComplemento"]' }
    reference = () => { return '[name="enderecoReferencia"]' }
}

export default CadastroNovoEnderecoElements;
