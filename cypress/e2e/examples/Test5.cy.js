/// <reference types="Cypress"/>

/*
-learning to grab another sibling of your next row

*/

describe('My First Test Suite', function(){
    it('My First Test case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //in ChoPath type tr td[2] and what we want will be highlighted 
        //in ChoPath type tr td:nth-child(2) will highlight all of the second td childern
        //in tr theres 3 td's and this line is grabbing the second td (second child of tr)
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if(text.includes("Python"))
            {
                //.next() is used if we want to grab the 3rd child of tr from the second child
                //.then is to resolve the promise
                //get a DOM element at a specific index in an array of elements
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })




    })   
})
