describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('http://testin.mozhi.ai/app/login')
      cy.contains('Get Started').click()
      cy.contains('Login').click()
      cy.get('.mat-input-element').eq(0)
      .type('soumya1@yopmail.com')
      cy.get('.mat-input-element').eq(1)
      .type('Soumya@12345')
      cy.get('.mat-button-wrapper').eq(2).click()
      cy.contains('My Bots').click()
      cy.contains('Create Bot').click()

      cy.get('.mat-input-element').eq(0).type('som')
      cy.get('.mat-input-element').eq(1).type('newtestewqwqertyuiop')
      cy.contains('Create Bot').click()
      Cy.contains("").click


    })
  })