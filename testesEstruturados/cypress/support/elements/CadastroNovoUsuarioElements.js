class CadastroNovoUsuarioElements { 
  name = () => { return 'input[name="nome"]' }
  cpf = () => { return 'input[name="cpf"]' }
  email = () => { return 'input[id="input-email"]' }
  confirmarSenha = () => { return 'input[name="confirmarSenha"]' }
  dataNascimento = () => { return 'input[id="input-data-nascimento"]' }
  ddd = () => { return 'input[id="input-ddd"]' }
  phoneNumber = () => { return 'input[id="input-phone"]' }
  enderecoIdentificador = () => { return 'input[name="enderecoIdentificador"]' }
  cep = () => { return 'input[id="input-cep"]' }
  enderecoNumero = () => { return 'input[id="input-enderecoNumero"]' }
}

export default CadastroNovoUsuarioElements;
