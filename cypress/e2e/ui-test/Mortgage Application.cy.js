

describe('Mortgae Account Test', () =>{

    it('Creare mortgage account', () =>{
        cy.visit("https://technovaschool.github.io/TechNovaBank/HomeLoanApplication.html")
        cy.title().should('include', 'Mortgage Application Form')
        cy.get('#name').type('John')
        cy.get('#email').type('js123@gmail.com')
        cy.get('#phone').type('7085421234')
        cy.get('#address').type('123 Main street Ave ')
        cy.get('#loan-amount').type('500$')
        cy.get('#credit-score').type('45')
        cy.get('#employment-status').select('Self-Employed')
        cy.get('#property-type').select('Condo')
        cy.get('#mortgage-term').select('15 Years')
        cy.get('#down-payment').type('300$')
        cy.get('#interest-rate').type('3')
        cy.get('#comments').type('Good job')
        cy.get('input[type="submit"]').click()
        cy.on('window:alert',(alert)=> {
            expect(alert).to.equal('Application has been successfully submitted!')


        




    })

})
})