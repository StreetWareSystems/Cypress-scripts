const { it } = require("mocha")


///<reference types="cypress"/>
it('streetware site test ',function(){

    cy.visit('https://www.streetwaresystems.com/')
    cy.get('.menu > :nth-child(2) > a').click()
    cy.get('#scroll-top').click()
    cy.get('.menu > :nth-child(4) > a').click()
    cy.get('.custom-nav-testimonial > .banners-z > .flat-carousel-box > .owl-carousel > .owl-nav > .owl-next').click()
    cy.get('.col-lg-5 > .mg-widget-mobi > .widget-services > .one-half > :nth-child(2)').contains('Search Engine Optimization').click()

})