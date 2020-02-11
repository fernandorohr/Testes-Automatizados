class CompraRetirarNaLojaElements {
    withdrawButton = () => {return 'button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]'}
    withdrawShop = () => {return 'button[data-entrega="RETIRADA_BALCAO"]'}
    city = () => {return 'select[name="select-cidade-loja"]'}
    shopName = () => {return 'button[data-nome-filial="PANVEL NOVA DE TAQUARA"]'}
    confirmWithdra = () => {return 'button[data-click="confirmarEntregaBalcao"]'}
    checkoutPay = () => {return 'button[data-click="checkout-pagamento"]'}
    creditCard = () => {return 'button[data-pagamento="CARTAO_CREDITO"]'}
    creditCardNumber = () => {return 'input[id="input-card-number"]'}
    creditCardExpith = () => {return 'select[name="input-card-month-expiry"]'}
    creditCardExpir = () => {return 'select[name="input-card-expiry"]'}
    creditCardCVC = () => {return 'input[name="input-card-cvc"]'}
    confirm = () => {return 'button[id="btn-finalizar-compra"]'}
}

export default CompraRetirarNaLojaElements;