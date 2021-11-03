// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

//this productName will come from the test so that we do not need to hard code blackberry
Cypress.Commands.add('selectProduct', (productName) => 
{
    cy.get('h4.card-title').each(($el, index, $list) => 
    {
        //if the item name is blackberry we want it to click it
        if($el.text().includes(productName))
        {
            //button is the tag and the btn btn-info is the name 
            //index will come from line 41 and click on the blackberry index
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
