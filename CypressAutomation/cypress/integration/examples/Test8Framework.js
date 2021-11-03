/// <reference types="Cypress"/>
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'


//-using before
//using fixturesFolder
//asserting attribute
//creating custom command
//parameterize test with multiple data sets
//cy.pause() pauses your test to help debug
//using object created in pageObjects folder

describe('Frames Test', function()
{
    //runs once before all tests in the block
    before(function(){
        //will go to fixture, example and 
        //data is only avaliable in this block
        cy.fixture('example').then(function(data)
        {
            //because data is only available in this block if you want to use it outside of this block
            //using "this.data" the this makes it a global variable in this entire class
            //so you can now use the data anywhere outside of this block
            this.data=data
        })
    })

    it("first test case",function()
    {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //ChorPath type input[name='name']:nth-child(2)
        //data.name comes from the fixture folder line 2
        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        //line 34 was what line 36 is doing. homepage comes from pageobjects folder
        homePage.getEditBox().type(this.data.name)
        //tag is a select and the options are male or female
        //data.gender comes from the fixtures folder line 3
        // cy.get('select').select(this.data.gender)
        //line 39 is what line 41 is doing. homepage comes from pageobjects folder
        homePage.getGender().select(this.data.gender)
        //asserting to see if the "two-way data binding exaple" has the name
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        //line 43 is what line 45 is doing. homepage comes from pageobjects folder
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //attr = attribute
        //inspect the name input box to find minlength
        //this is to assert an attribute
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength', '2')
        //line 49 is what line 51 is doing. homepage comes from pageobjects folder
        homePage.getEditBox().should('have.attr','minlength', '2')
        // cy.get('#inlineRadio3').should('be.disabled')
        //line 52 is what line 54 is doing. homepage comes from pageobjects folder
        homePage.getEntrepreneur().should('be.disabled')
        
        // cy.get(':nth-child(2) > .nav-link').click()
        //line 56 is what line 58 is doing. homepage comes from pageobjects folder
        homePage.getShopTab().click()
        
        /*STEP1 
        this whole thing is now in support/commands.js folder to make it into a custom command 
        //tag h4 has the name card-title and that will highlight all of the names of the items
        cy.get('h4.card-title').each(($el, index, $list) => 
        {
            //if the item name is blackberry we want it to click it
            if($el.text().includes('Blackberry'))
            {
                //button is the tag and the btn btn-info is the name 
                //index will come from line 41 and click on the blackberry index
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })
        */
       
       /*STEP2
       //this function is created in support/commands.js folder and the blackberry is the argument
       cy.selectProduct('Blackberry')
       cy.selectProduct('Nokia Edge')
       */ 
      
      //STEP3 (if you dont understand how this is happening read step1-3)
      //want to click add button of blackberry and nokia edge 
      //this.data.productName comes from fixtures/examples.json folder
      //in fixtures/examples.json productName is an array of strings
        //forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        //in this case element is whats in the array
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        })
        //click the checkout button
        // cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        //line 94 is what line 96 is doing. productsPage comes from the productpage folder
        productPage.checkOutButton().click()
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        //https://docs.cypress.io/guides/references/configuration#Cypress-config
        //this is to set a time only to this file
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('.suggestions > ul > li > a').click()
    })
})