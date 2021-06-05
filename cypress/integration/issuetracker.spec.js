describe('Issue ', function () {
    beforeEach(function () { 
        cy.visit('http://localhost:3000') 
    })

    it('front page can be opened', function () {
        cy.contains('Issue Tracker')
        cy.contains('Sign in')
    })

    it('sign in and create project', function () {
        cy.contains('Sign in as a demo user').click()
        cy.contains('Create').click()
        cy.contains('Create new project').click()
        cy.get('#project-name').type('cypress-test')
        cy.get('#project-type').type('test')
        cy.get('#project-description').type('test')
        cy.get('.project-submit').click()
    })
})