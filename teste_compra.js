describe('Teste de Compra', function(){
    it('Acessar site', function(){
        cy.visit('https://panvel.com')
        //cy.reload(true)
        cy.wait(1200)
        cy.get('[title = Login ]').click()
        cy.get('[id = input-usuario]').type('testedimed@gmail.com')
        cy.wait(1200)
        cy.get('[name = senha]').type('teste123!')
        cy.wait(1200)
        cy.get('button[id = "btn-next-step"]').click()
    })
})

/*      cy.get('[name = search]').click().type('pastilha vick{enter}')
        cy.get('a[href="/panvel/pastilha-vick-cereja-c-5-avulso/p-345962"]').click()
        cy.contains('COMPRAR').click()
        cy.wait(1200)
        cy.get('a[href="/panvel/exibirCesta.do"]').click()
        cy.wait(1200)
        cy.get('a[href="/panvel/prosseguirCarrinhoCompras.do"]').click()
        cy.wait(1200)*/