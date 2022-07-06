/// <reference types="Cypress"/>


describe('SportsRecruits Test Suite', function(){
    beforeEach(()=>
    {
        //opening browser of SportsRecruits login page
        //this is a baseUrl and located in cypress.json file
        cy.visit("https://stage.sportsrecruits.com/login")
    })

    it('I can visit the SportsRecruits login page https://stage.sportsrecruits.com/login', function(){
        
        //checking to see if the correct url opened
        cy.url().should('include', '/login')
    })

    it('If I enter an email not in our system I receive an error', function(){

        //typing incorrect email 'notarealemail@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('notarealemail@sportsrecruits.com')

        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()   

        //checking to see if there is an alert message
        cy.get('[data-dismiss=alert]').should('be.visible')
    })

    it('If I enter an email not in our system the error correct message will be displayed', function(){

        //typing incorrect email 'notarealemail@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('notarealemail@sportsrecruits.com')

        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()  

        //checking to see if the correct alert message is shown
        cy.contains("We couldn't find an account with this email. Don't have a SportsRecruits Profile yet? Click here to get started with a free student-athlete profile!").should('be.visible')
        
        cy.get('div.alert.alert-error').should(($ele)=>
        {
            expect($ele).to.contain("We couldn't find an account with this email. Don't have a SportsRecruits Profile yet? Click here to get started with a free student-athlete profile!")
        })
    })

    it('If I click on the link in the error message I am brought to the signup page with the incorrect email from the login page already populated in the email field', function(){
        
        //typing incorrect email 'notarealemail@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('notarealemail@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //checking to see if the correct alert message is shown
        cy.contains("We couldn't find an account with this email. Don't have a SportsRecruits Profile yet? Click here to get started with a free student-athlete profile!")
        
        //clicking alert messages link to a new tab
        cy.contains('Click here to get started with a free student-athlete profile!').click()
        
        //checking the new tab opened the correct url
        cy.url().should('include', 'signup')
    })


    it('If I enter an email that is in our system a password field becomes present', function(){
        

        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //verifying that the password field is present
        cy.get('[data-qa=password_field]').should('be.visible')
    })

    it('If I enter the incorrect password a "Password is Incorrect" modal is present on the screen', function(){
        
        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //typing incorrect password 'incorrectPassword' in password input box
        cy.get('.login-password').type('incorrectPassword')
        
        //click 'Log In' button
        cy.get('.login-submit').click()
        
        //checking to see if the correct alert message is shown
        cy.contains('Password is incorrect').should('be.visible')
        
        cy.get('div.alert.alert-error').should(($ele)=>
        {
            expect($ele).to.contain('Password is incorrect.')
        })
    })

    it("If I click on 'Reset My Password' a 'We've sent you an email with instructions for resetting your password.' modal is present on the screen" , function(){
        
        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //typing incorrect password 'incorrectPassword' in password input box
        cy.get('.login-password').type('incorrectPassword')
        
        //click 'Log In' button
        cy.get('.login-submit').click()
        
        //click 'Reset my password'
        cy.get('.login-reset-password').click()
        
        //checking to see if the correct alert message is shown
        cy.contains("We've sent you an email with instructions for resetting your password.").should('be.visible')
        
        cy.get('div.alert.alert-success').should(($ele)=>
        {
            expect($ele).to.contain("We've sent you an email with instructions for resetting your password.")
        })
    })

    it("If I click on 'Reset My Password' a password reset email is sent to the correct email", function(){
        
        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //intercept provides response object
        cy.intercept
        ({ 
            method: 'POST',
            url:'https://stage.sportsrecruits.com/ajaxs/reset_password'
        },
        {
            //200 status response indicates that the request has succeeded
            statusCode: 200
        }).as('resetPasswordCheck')
        
        //click 'Reset my password' button
        cy.get('.login-reset-password').click()
        
        //verifying the password reset email was sent to the correct email
        cy.wait(`@resetPasswordCheck`).its('response.statusCode').should('eq', 200)
    })

    it("If I click on 'Send Me a Link' a 'You will be receiving an email with your login link shortly!' message is present", function(){
        
        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //click 'Send Me a Link'
        cy.get('.login-request-magic-link').click()
        
        //checking to see if the correct message is shown
        cy.contains('You will be receiving an email with your login link shortly!').should('be.visible')
        
        cy.get('p.login-magic-link-success').should(($ele)=>
        {
            expect($ele).to.contain('You will be receiving an email with your login link shortly!')
        })
    })

    it("If I click on 'Send Me a Link' a magic link is sent to the correct email", function(){
        
        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //intercept provides response object
        cy.intercept
        ({ 
            method: 'POST',
            url:'https://api-stage.sportsrecruits.com//api/v1/magic/send'
        },
        {
            //200 status response indicates that the request has succeeded
            statusCode: 200
        }).as('sendLinkCheck')
        
        //click 'Send Me a Link' button
        cy.get('.login-request-magic-link').click()
        
        //verifying the magic link was sent to the correct email
        cy.wait('@sendLinkCheck').its('response.statusCode').should('eq', 200)
    })  

    it('If I enter the correct email and password I am authenticated and able to log into the SportsRecruits platform', function(){
        
        //typing correct email 'automationtester@sportsrecruits.com' in email input box
        cy.get('[data-qa=type_email]').type('automationtester@sportsrecruits.com')
        
        //click 'Continue' button
        cy.get('[data-qa=continue_button]').click()        
        
        //typing correct password 'sportsrecruits' in password input box
        cy.get('.login-password').type('sportsrecruits')
        
        //click 'Log In' button
        cy.get('.login-submit').click()
        
        //verifying that I am logged into the SportsRecruits platform
        cy.get('[data-segment-track=get_verified_cta]').should(($ele)=>
        {
            expect($ele).to.contain('Profile Status: Unverified')
        })
        
        //checking the url that I am logged in 
        cy.url().should('include', '/activity/global')
    })
})