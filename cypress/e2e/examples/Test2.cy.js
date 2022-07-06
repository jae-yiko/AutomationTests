/// <reference types="Cypress"/>

/*
-search ca click on item that is Cashews
-add to cart on
-click cart button
-place order
*/

describe('My First Test Suite', function(){
    it('My First Test case', function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //.as(variableName) is used to make a variable so instead of writting const variableName
        cy.get('.products').as('productLocator')
        //each is being used here to iterate over the array of web elements ($el, index, $list) https://docs.cypress.io/api/commands/each
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
           const textVeg = $el.find('.product-name').text()
           //.includes helps find subtext https://www.w3schools.com/jsref/jsref_includes.asp
           if(textVeg.includes('Cashews'))
           {
               $el.find('button').click()
           }
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })   
})
