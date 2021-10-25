/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

//-learning iframe #40

describe('Frames Test', function()
{
    it('demo example', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //loads the frame
        cy.frameLoaded('#courses-iframe')
        //switching to iframe mode
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //ChroPath type h1[class*='pricing-title']
        //.iframe() is so that computer will know that whatever I am searching for is in iframes
        //checking to see if bronze and plantinum is there
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)

    })
})