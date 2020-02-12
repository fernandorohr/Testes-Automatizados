Feature: fazer compra no site panvel

   Scenario: retirar a compra na loja
    Given acesso o site Panvel
    When acessa minha conta
    And adiciona um produto ao carrinho
    And seleciona forma de entrega
    Then finaliza a compra