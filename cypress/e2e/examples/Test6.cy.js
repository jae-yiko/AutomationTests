/// <reference types="Cypress"/>

/*
-hover button checking to see the hidden elements by clicking it 
-hover button checking to see the hidden element by internally clicking it

*/

describe('checking with hover', function(){
    it('My First Test case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //show is a jquery method used to display the hidden and selected elements
        //.invoke() is a function on the previously yeilded(provided) subject
        //when you hover over the button it will show the hidden contents
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')


    })   
    it('checking without hover', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //used to handle invisible elements
        //force:true will click internaly by DOM by passing this argument and it will click on the invisible element to get our url
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')


    })
})
