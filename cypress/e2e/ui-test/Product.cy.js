
describe('Product', () => {
    beforeEach(() => {
        cy.visit('/LoginPage.html');
    });
    it('should login', () =>{
        cy.login('admin', 'password');
        cy.get("[class= 'dropdown-content']").eq(0).invoke('show')
        cy.get('a').contains('Auto').click({ force: true });






        //cy.get('.drop-btn').eq(1).trigger('mouseover');

    })

    })
