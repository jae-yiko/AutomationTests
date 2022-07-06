/// <reference types="Cypress"/>

/*
-learning to click on alerts and checking the alerts
-how to make a link open in the same tab not in a new TAB

*/

describe('My First Test Suite', function(){
    it('My First Test case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //ALERTS
        //after a popup or alert cypress will click ok for you
        cy.get('#alertbtn').click()
        //when there is an alert on the page automatically will get window:alert trigger for that proposal
        //when window:alert is triggered the popup will be captured and the text present on the alert will be shown
        //https://docs.cypress.io/api/events/catalog-of-events#App-Events
        //.on(firing event, output for firing event)
        cy.on('window:alert', (str) => 
        {
            //comparing 2 strings in Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm', (str) => 
        {
            //comparing 2 strings in Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //TAB
        // https://www.w3schools.com/tags/att_a_target.asp
        //target makes a new tab open up so if we remove target it will open new url in same tab
        //.invoke(invoking remove function, what attribute you want to remove)
        //Because of this line when you click on btn it will not open up in a new tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        //checking this see if the new url opened
        //include is to see if 'index' is included in the new url
        cy.url().should('include', 'index')
        //how to click the arrows on the browser to go back to previous url
        //https://docs.cypress.io/api/commands/go
        cy.go('back')




    })   
})
