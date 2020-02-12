Feature: Compra Locker
  Scenario: Realiza a compra por locker
    Given acesso o site Panvel
    When acesso minha conta
    And adiciona um produto ao carrinho
    And seleciona forma de entrega
    Then finaliza a compra