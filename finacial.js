///<reference types="cypress"/>


describe("fin test", () => {
    it('Fin test',function(){
    
        cy.visit('https://www.instamotion.com/checkout/49774cc0-76f9-4867-9d06-f933cffda941?from=from_option_screen')
        cy.get('#onetrust-accept-btn-handler').click()
        Cypress.Commands.add("autocomplete", (element) => { 
            cy.get(element).then(()=>{
                cy.wait(2000) // waiting for ajax to complete
                cy.get(".sc-ibxdXY ggJZwW undefined-button")
                .click()
                cy.get('#checkout\.form\.name').type('abc')
            })
    
    
    
    })
    })
})