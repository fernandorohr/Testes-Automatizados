Feature: fazer compra no site panvel

   Scenario: retirar a compra na loja
    Given acesso o site panvel
    When acessa minha conta
    And adiciona um produto ao carrinho
    Then finaliza a compra