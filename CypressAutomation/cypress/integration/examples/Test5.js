/// <reference types="Cypress"/>

/*
-learning to grab another sibling of your row

*/

describe('My First Test Suite', function(){
    it('My First Test case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //
        //in tr theres 3 td's and this line is grabbing the second td (second child of tr)
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if(text.includes("Python"))
            {
                //we want to grab the 3rd child of tr and this is how to get the next sibling
                //.then is to resolve the promise
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })




    })   
})
