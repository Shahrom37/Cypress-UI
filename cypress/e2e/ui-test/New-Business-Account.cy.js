

describe('New Business Accoun Test', () =>{

    it('Create a new business account', () =>{

        cy.visit("https://technovaschool.github.io/TechNovaBank/BusinessSavingPage.html")
        cy.title().should('include', 'Tech Nova Business Savings Account Creation')
        cy.get('h2').contains('New Business Account').should('be.visible')
        cy.get('#firstName').type('john')
        cy.get('#lastName').type('Smith')
        cy.get('#email').type('sh123@gmail.com')
        cy.get('#business-name').type('jsexpress')
        cy.get('#business-type').type('Truck business')
        cy.get('#business-address').type('1234 Main Street harlem ave')
        cy.get('#tax-id').type('1234556789')
        cy.get('#state').select('Alabama')
        cy.get('button[type= submit]').click()
        cy.on('window:alert',(alert)=> {
            expect(alert).to.equal('Your account has been successfully created.')
        })



        


    
    })
})