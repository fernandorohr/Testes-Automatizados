describe('Scroll Issue', function(){
    it('Acessa', function(){
        cy.visit('https://panvel.com')
        cy.scrollTo(0,12800)
        cy.contains('DESCOBRIR MAIS').click()
        cy.scrollTo(0,2000)
      
    })
})