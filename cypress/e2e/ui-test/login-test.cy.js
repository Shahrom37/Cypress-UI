 



describe('Login  Test Suite',() => {



    beforeEach(() =>{
        cy.visit('/LoginPage.html')
    })

   it('Login Test', () => {
    cy.login('admin', 'password')
    
      
    })
    it('Shedule Appointment', () =>{
        cy.login('admin', 'password')
        cy.get('a').contains('Schedule Appointment').click()
        cy.url().should('include', 'AppointmentPage');
        cy.title().should('contain', 'Schedule Appointment')
        cy.get('h2').contains('Schedule Appointment').should('be.visible')


        cy.enterTextByIndex(0,'John')
        cy.enterTextByIndex(1,'Smith')
        cy.enterTextByIndex(2,'123@gmail.com')
        cy.enterTextByIndex(3,'345678')
        cy.enterTextByIndex(4,'8: 00AM')

        cy.get('select').eq(0).select('Open New Checking')
        cy.get('select').eq(1).select(4)
        cy.get('select').eq(2).select(11)
        cy.get('select').eq(3).select('have.value', '2023')
        cy.get('button').contains('Submit').click()

        cy.on('window:alert',(alert) =>{
           expect(alert).to.contains('')
           expect(alert).to.eq('')

        })




       // cy.get('#bankName').select('Bank C').should('have.value', 'Bank C')
    //cy.get('#amount').type('1000')
   // cy.get('button').contains('Send').click()





        

       // cy.get('input').eq(0).type('John')
       // cy.get('input').eq(1).type('Smith')
       // cy.get('input').eq(2).type('123@gmail.com')
       // cy.get('input').eq(3).type('345678')
       // cy.get('input').eq(4).type('8:00 AM')
       // cy.get('input').eq(5).type('Smith')



    
    })
})