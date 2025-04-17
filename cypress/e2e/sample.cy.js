describe('Sample Test', () => {
  it('Cypress is working properly', () => {
    // This is a basic test that will pass
    expect(true).to.equal(true)
  })

  it('can visit the base URL', () => {
    // This test will help verify the baseUrl configuration
    // Note: This will fail if your app is not running on http://localhost:3000
    // Uncomment this when you have your application running
    // cy.visit('/')
    // cy.contains('h1', 'Welcome')
  })
}) 