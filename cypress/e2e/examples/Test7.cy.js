/// <reference types="Cypress"/>

/*
-hover button checking to see the hidden elements by clicking it 
-hover button checking to see the hidden element by internally clicking it

*/

describe('checking with hover', function(){
    it('My First Test case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //.prop() gets the property value (property = attribute) JQUERY
        //because .get() is cypress and .prop() is jquery you need to resolve the promise
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.log(url)
            //this does not work because in line 11 we have https://rahulshettyacademy.com 
            //it is expecting it to have the same domain but the url we are getting here is
            //www.qaclickacademy.com in the video
            cy.visit(url)

        })


    })   
})
