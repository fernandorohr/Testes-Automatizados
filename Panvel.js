describe('Testando', function(){
    var price = 3;
    var price1 = 99;
    var quantidade;
    it('Entra PANVEL', function(){
      cy.viewport(1350, 760) 
      cy.visit('https://www.panvel.com/panvel/main.do')        
    })
    it('Pesquisa Item', function(){
      cy.get('input[name="search"]').type('Hastes Flexiveis{enter}')
      cy.get('.item-preco__valor').contains(price +','+price1)
      cy.get('')
      
    })   
    
})