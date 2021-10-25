/// <reference types="Cypress"/>

//-using beofre, beforeeach,after,aftereach
describe('Frames Test', function()
{
    //runs once before all tests in the block
    before(function(){
        
    })

    it("first test case",function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //ChorPath type input[name='name']:nth-child(2)
        cy.get('input[name="name"]:nth-child(2)').type("Bob")
        //tag is a select and the options are male or female
        cy.get('select').select('Female')
    })
})