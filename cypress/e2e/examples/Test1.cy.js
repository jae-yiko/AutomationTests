/// <reference types="Cypress"/>

/*
-search ca and validate that 4 items showed up
-add to chart the item that has an index of 2
-manually resolve a promise (wait until add to chart is clicked before a console.log shows on console.log)
-use each method in an array to check we fould Cashews 
-check logo is saying  "GREENKART"
-show logo on cypress and cypress log
*/

describe('My First Test Suite', function(){
    it('My First Test case', function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //checking to see that there are 4 results that show up when you write ca
        //.should('have') is used to verify. 'have' is being used because I am verifying a property
        cy.get('.product:visible').should('have.length', 4)
        //.as(variableName) is used to make a variable so instead of writting const variableName
        cy.get('.products').as('productLocator')
        //Parents child chaining 
        cy.get('@productLocator').find('.product').should('have.length', 4)
        //.eq() helps find the specified index number
        //.contains() helps find the specified text
        //.then() is used to make sure this promise resolves so that after it click the 'ADD TO CART' button it will console.log()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })

        //each is being used here to iterate over the array of web elements ($el, index, $list) https://docs.cypress.io/api/commands/each
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
           const textVeg = $el.find('.product-name').text()
           //.includes helps find subtext https://www.w3schools.com/jsref/jsref_includes.asp
           if(textVeg.includes('Cashews'))
           {
               $el.find('button').click()
           }
        })

        /* this will not work because promise is not resolved because it is not written in cypress language
        const logo= cy.get('.brand')
        cy.log(logo.text())
        */

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        //this is to print in logs
        //.then() will wait until promise is resolved and once it is resolved it is put into the logoElement variable
        cy.get('.brand').then(function(logoElement)
        {
            //cy.log() acts like a console.log but in cypress
            // .text() is not a cypress command it is a jquery command
            cy.log(logoElement.text())
        })
    })
})