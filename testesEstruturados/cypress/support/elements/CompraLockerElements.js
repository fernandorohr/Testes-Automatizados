class CompraLockerElements { 
  informarEntrega = () => { return 'a[href="/panvel/informarEntrega.do"]' }
  botaoFlutuante = () => { return 'button[class="btn btn--big btn--big-left btn--color-green btn--text-bold btn--icon btn--icon--right btn--flutuante"]' }
  botaoEntregaLocker = () => { return 'button[data-entrega="LOCKER"]' }
  botaoIdentificadorLocker = () => { return 'button[data-identificador-locker="2"]' }
  confirmarEntregaLocker = () => { return 'button[data-click="confirmarEntregaLocker"]' }
  checkoutPagamento = () => { return 'button[data-click="checkout-pagamento"]' }
  cartaoCredito = () => { return 'button[data-pagamento="CARTAO_CREDITO"]' }
  cardNumber = () => { return 'input[id="input-card-number"]' }
  cardMonthExpiry = () => { return 'select[name="input-card-month-expiry"]' }
  cardExpiry = () => { return 'select[name="input-card-expiry"]' }
  cardCvc = () => { return 'input[name="input-card-cvc"]' }
  finalizarCompra = () => { return 'button[id="btn-finalizar-compra"]' }
}

export default CompraLockerElements;
