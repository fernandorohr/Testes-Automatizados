Feature: Quantidade de resultados na busca

   Scenario: Carregamento da quantidade de resultados da busca
    Given acesso o site Panvel
    When pesquiso por um produto
    Then verifico a quantidade de produtos listados na busca