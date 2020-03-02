describe('Sample1', function() {
    it('verify url', function() {


      cy.visit('https://cash.mercurydev.tk/login')
      cy.contains('OK').click()
      cy.wait(500)
      cy.get('.LoNotSensitive.form-control').eq(0).type('deva+10@calibraint.com')
      cy.get('.form-control').eq(1).type('Aa!123456')
      cy.wait(500)
      cy.get('.btn-default-mc.signX').click()
      //cy.contains('LOG IN').click()
    })
  })