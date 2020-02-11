Feature: Compra Locker
  Scenario: Realiza a compra por locker
    Given acesso o site Panvel
    When acesso minha conta
    And adiciona um produto ao carrinho
    Then realiza a compra por locker