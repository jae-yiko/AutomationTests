/// <reference types="Cypress"/>

/*
-learning to click on checkboxes and mutliple checkboxes
-learning to select an static dropdown option
-learning to select a dynatmic dropdown option
-learning to click radio buttons
*/

describe('My First Test Suite', function(){
    it('My First Test case', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //CHECKBOX 
        //.check() is more preferable for check boxes instead of .click()\
        //.should('be.') is checking/verifying to see if the check box has been checked. We are using .be because we are checking for behavior changes
        //'.be' is for behavior
        //if you are writing mutlitple .should() then just use .and()
        //.should('have.value') is used to verify. 'have' is being used because I am verifying a property
        //.should('have.value') the .value is here because it is  the property name
            //if you check inspect it will say value='option1'
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        //this is using attribute and tagname
        //.check() method will accept value property of our checkboxes
        //this is to click mutliple checkboxes in one line
        cy.get('input[type="checkBox"]').check(['option2','option3'])

        //STATIC DROPDOWN 
        //select is a tagname
        //.select inside option name OR value attribute of that option
        //.should() is verifying property
        cy.get('select').select('option2').should('have.value', 'option2')

        //DYNAMIC DROPDOWN
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            const textVeg = $el.find('#ui-id-14').text()
            //.includes helps find subtext https://www.w3schools.com/jsref/jsref_includes.asp
            if($el.text()==="India")
            {
                $el.click()
            }
         })
         cy.get('#autocomplete').should('have.value', 'India')

         //HIDE/SHOW
         //.should() will verify if the behavior is visible or not
         cy.get('#displayed-text').should('be.visible')
         cy.get('#hide-textbox').click()
         cy.get('#displayed-text').should('not.be.visible')
         cy.get('#show-textbox').click()
         cy.get('#displayed-text').should('be.visible')

         //RADIO BUTTONS
         cy.get('input[value="radio1"]').click().should('have.value', 'radio1')
         cy.get('[value="radio2"]').check().should('be.checked')
    })   
})
