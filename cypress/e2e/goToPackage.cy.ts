export {}
describe('goToPackage', () => {
  it('should search a package, visualize it then go back to / and still see the searched value', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // type test and press enter
    cy.get('input').type('test').should('have.value', 'test').type('{enter}')

    // go to package test
    cy.get('a[href="/package/test"').click()

    // the url should be /package/test
    cy.url().should('include', '/package/test')

    // the h5 (name of package) should be test
    cy.get('h5').contains('test')

    // click on the home button
    cy.get('a[href="/"').click()

    // the should be /
    cy.url().should('include', '/')

    // the search input should still have the
    cy.get('input').should('have.value', 'test')
  })
})
