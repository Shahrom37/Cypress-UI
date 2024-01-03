


describe('Visa  Test',() => {
    require('cypress-xpath')


    it('Visa Card ', () =>{
        cy.visit('https://technovaschool.github.io/TechNovaBank/VisaLoanApplication.html')
        cy.xpath("//input[@id='first-name']").type('john')
        cy.xpath("//input[@id='last-name']").type('Smith')
        cy.get('select').eq(0).select('Mrs.')
        cy.xpath("//input[@id='middle-name']").type('Mike')
        cy.get('#single').check()
        cy.xpath("//input[@id='email']").type('jhon123@gmail.com')
        cy.get('input').eq(7).type('Anna')
        cy.xpath("//input[@id='address']").type('123 Main street harlem ave')
        cy.get('#date-of-birth').type('2024-02-02')
        cy.xpath("//input[@id='income']").type('500')
        cy.get('select').eq(1).select('Manager')
        cy.xpath("//input[@id='loan-amount']").type('2000')
        cy.get('#employment-status').select(1)
        cy.get('#submit-btn').click()
        cy.on('window:alert', (alert)=>{
         expect(alert).to.equal('Application Has been successfully submitted!')

         


       
    
    
    
    
        })



       





        
        

        




      



        

    



    })
})
