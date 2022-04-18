


///<reference types="cypress"/>



beforeEach(() =>{
    cy.visit('https://rofhub.com/login/?redirect_to=https%3A%2F%2Frofhub.com%2F&bp-auth=1&action=bpnoaccess')
})
// it('streetware site Responsiveness testing iphone-6 Resolution ',function(){
//     cy.viewport('iphone-6')
//     cy.get('.btn-menu').click()
//     cy.wait(1000)
//     cy.get('.btn-menu').click()
//     cy.wait(500)
//     cy.get('.all-solution', {delay:1000}).click()
//     cy.wait(800)
//     cy.get('#scroll-top').click()
// })

// it.only('iphone x resolution', () => {
//     cy.viewport('iphone-x')
//     cy.get('.btn-menu').click()
//     cy.wait(1000)
//     cy.get('.btn-menu').click()
//     cy.wait(500)
//     cy.get('.all-solution', {delay:1000}).click()
//     cy.wait(800)
//     cy.get('#scroll-top').click()
//     cy.get('.btn-menu').click()
//     cy.wait(2000)
//     cy.get('.menu > :nth-child(5) > a').click()
//     cy.wait(2000)
//     cy.get('.btn-menu').click()
//     cy.get('#firstname').click().type('waleed', { delay: 100 })
//     cy.get('#email').click().type('waleed.sabzal123@gmail.com', {delay: 100})
//     cy.get('select').select('SEO')
//     cy.wait(1000)
// })

//logo testing for different screens 
// const sizes = ['iphone-6', 'ipad-2', 'iphone-7', 'iphone-8', 'iphone-x' [1024, 768, 667, 375, 812]]

// describe('Logo', () => {
//   sizes.forEach((size) => {
//     // make assertions on the logo using
//     // an array of different viewports
//     it(`Should display logo on ${size} screen`, () => {
//       if (Cypress._.isArray(size)) {
//           cy.wait(5000)
//         cy.viewport(size[0],size[1],size[2],size[3],size[4])
//       } else {
//         cy.viewport(size)
//       }

//        cy.visit('http://streetwaresystems.com/')
//        cy.get('#logo').should('be.visible')
//     })
//   })
// })



//hum burger testing

describe(
    'page display on medium size screen',
    {    
      viewportHeight: 1536,
      viewportWidth: 960,
    },
    () => {
      it('shows hamburger menu', () => {
        // cy.get('.btn-menu').click()
        //     cy.wait(1000)
        //     cy.get('.btn-menu').click()
        //     cy.wait(500)
        //     cy.get('.all-solution', {delay:1000}).click()
        //     cy.wait(800)
        //     cy.get('#scroll-top').click()
        //     cy.get('.btn-menu').click()
        //     cy.wait(2000)
        //     cy.get('.menu > :nth-child(5) > a').click()
        //     cy.wait(2000)
        //     cy.get('.btn-menu').click()
        //     cy.get('#firstname').click().type('waleed', { delay: 100 })
        //     cy.get('#email').click().type('waleed.sabzal123@gmail.com', {delay: 100})
        //     cy.get('select').select('SEO')
        //     cy.wait(1000)
        cy.get('#header').find('.btn-menu').should('be.visible')
      })
    }
  )
  