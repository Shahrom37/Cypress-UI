

describe('New  Account Test',() => {
    require('cypress-xpath')

    it('Create a new account', () =>{
        

        cy.visit("https://technovaschool.github.io/TechNovaBank/ApplyNewAccount.html")
        cy.get('h2').contains('Create New Account').should('be.visible')
        
        cy.title().should('contain', 'Create New Account')
        cy.url().should('include', 'ApplyNewAccount')
        cy.xpath("//input[@id='firstName']").type('john')
        cy.xpath("//input[@id='lastName']").type('Smith')
        cy.xpath("//input[@id='email']").type('jhon123@gmail.com')
        cy.xpath("//input[@id='password']").type('123456789')
        cy.xpath("//input[@id='cellPhone']").type('7084532156')
        cy.xpath("//input[@id='address']").type('123 Main street harlem ave')
        cy.xpath("//input[@id='city']").type('worth')
        cy.get('select').eq(0).select('Alabama')
        cy.xpath("//input[@id='zipCode']").type('60543')
        cy.get('select').eq(0).select('Alabama')
        cy.get('select').eq(1).select('New Checking')
        

    })




        






    






        //input[@id='lastName']

    



    })

