
///<reference types="cypress"/>



it('Car information',function(){

cy.visit('https://www.instamotion.com/')

// ACCEPTING cookies
cy.get('#onetrust-accept-btn-handler').click()
//selecting car 
cy.get('[role="combobox"][aria-labelledby="downshift-421880-label"] > .sc-dYzWWc > .sc-gMcBNU').click()
cy.get('#downshift-0-item-2').click()
//selecting model
cy.get('[role="combobox"][aria-labelledby="downshift-421881-label"] > .sc-iLVFha > .sc-gMcBNU > .sc-htpNat').click()
cy.get('#downshift-1-item-2').click()
// click button
cy.get('[data-testid=landing-search-button]').click()
//selecting car pic 

cy.get('.clYyRJ > .sc-fQkuQJ > .hXZcjP > .sc-dBaXSw > [style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"] > img').click()
//clicking on started request button
cy.get('.Details__Container-yrg3im-0 > .sc-dnqmqq').click()
//clicking on further button 
cy.get('.sc-dnqmqq').click()

// 2nd test 
cy.get('#downshift-14116-input').contains('Bitte wählen').click().should('be.visible')

})