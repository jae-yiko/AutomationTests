/// <reference types="Cypress"/>

describe('SportsRecruits Test Suite', function(){
    // it('I can visit the SportsRecruits login page	https://stage.sportsrecruits.com/login		', function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    // })
    // it('If I enter an email not in our system I receive an error', function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing incorrect email "notarealemail@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('notarealemail@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //checking to see if thier is an alert message
    //     cy.contains("We couldn't find an account with this email. Don't have a SportsRecruits Profile yet? Click here to get started with a free student-athlete profile!")
    // })
    // it('The error has the correct message displayed', function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing incorrect email "notarealemail@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('notarealemail@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //checking to see if the correct alert message is shown
    //     //????????????????????????????????????????????????????????????????not working?????????????????????????????????
    //     cy.contains("We couldn't find an account with this email. Don't have a SportsRecruits Profile yet? Click here to get started with a free student-athlete profile!")
    // })
    // it('If I click on the link in the error message I am brought to the signup page w/ the incorrect email from the login page already populated in the email field', function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing incorrect email "notarealemail@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('notarealemail@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //checking to see if the correct alert message is shown
    //     cy.contains("We couldn't find an account with this email. Don't have a SportsRecruits Profile yet? Click here to get started with a free student-athlete profile!")
    //     //clicking alert messages link to a new tab
    //     cy.contains('Click here to get started with a free student-athlete profile!').click()
    //     //checking the new tab opened the correct url
    //     cy.url().should('include', 'signup')
    // })
    // it('If I enter an email that is in our system a password field becomes present', function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing correct email "automationtester@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('automationtester@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //typing correct password "sportsrecruits" in password input box to check if password field is present
    //     cy.get('.login-password').type('sportsrecruits')
    // })
    // it('If I enter the incorrect password a "Password is Incorrect" modal is present on the screen', function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing correct email "automationtester@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('automationtester@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //typing incorrect password "incorrectPassword" in password input box
    //     cy.get('.login-password').type('incorrectPassword')
    //     //click "Log In" button
    //     cy.get('.login-submit').click()
    //     //checking to see if the correct alert message is shown
    //     cy.contains("Password is incorrect")
    // })
    // it("If I click on 'Reset My Password' a 'We've sent you an email with instructions for resetting your password.' modal is present on the screen" , function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing correct email "automationtester@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('automationtester@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //typing incorrect password "incorrectPassword" in password input box
    //     cy.get('.login-password').type('incorrectPassword')
    //     //click "Log In" button
    //     cy.get('.login-submit').click()
    //     //click "Reset my password"
    //     cy.get('.login-reset-password').click()
    //     //checking to see if the correct alert message is shown
    //     cy.contains("We've sent you an email with instructions for resetting your password.")
    // })
    it("If I click on 'Reset My Password' a password reset email is sent to the correct email", function(){
        //opening browser of SportsRecruits login page
        cy.visit("https://stage.sportsrecruits.com/login/")
        //typing correct email "automationtester@sportsrecruits.com" in email input box
        cy.get('.login-email').type('automationtester@sportsrecruits.com')
        //wait 2ms aka 2 seconds
        cy.wait(2000)
        //click "Continue" button
        cy.get('.OTGBtn').click()
        //typing incorrect password "incorrectPassword" in password input box
        cy.get('.login-password').type('incorrectPassword')
        //click "Log In" button
        cy.get('.login-submit').click()
        //click "Reset my password"
        cy.get('.login-reset-password').click()
//??need to make sure email was sent to correct email????????????????????????????????????????????????????????????????????
        // (dd1699f5d2-e0ec67@inbox.mailtrap.io+automationtester@sportsrecruits.com)
    })
    // it("If I click on 'Send Me a Link' a 'You will be receiving an email with your login link shortly!' message is present", function(){
    //     // opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing correct email "automationtester@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('automationtester@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //click "Send Me a Link"
    //     cy.get('.login-request-magic-link').click()
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //checking to see if the correct message is shown
    //     cy.contains("You will be receiving an email with your login link shortly!")
    // })
    // it("If I click on 'Send Me a Link' a magic link is sent to the correct email", function(){
        
    // })   
    // it("If I enter the correct email and password I am authenticated and able to log into the SportsRecruits platform", function(){
    //     //opening browser of SportsRecruits login page
    //     cy.visit("https://stage.sportsrecruits.com/login/")
    //     //typing correct email "automationtester@sportsrecruits.com" in email input box
    //     cy.get('.login-email').type('automationtester@sportsrecruits.com')
    //     //wait 2ms aka 2 seconds
    //     cy.wait(2000)
    //     //click "Continue" button
    //     cy.get('.OTGBtn').click()
    //     //typing correct password "sportsrecruits" in password input box
    //     cy.get('.login-password').type('sportsrecruits')
    //     //click "Log In" button
    //     cy.get('.login-submit').click()
    // })
    
})