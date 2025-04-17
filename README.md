# Certiva Cypress

End-to-end testing setup using Cypress for the Certiva project.

## Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Running Cypress Tests

### Open Cypress Test Runner (Interactive Mode)

```bash
npm run cypress:open
```

### Run Cypress Tests in Headless Mode

```bash
npm run cypress:run
```

or

```bash
npm test
```

## Project Structure

- `cypress/e2e/` - Contains all end-to-end test files
- `cypress.config.js` - Cypress configuration

## Writing Tests

Create new test files in the `cypress/e2e/` directory with the `.cy.js` extension.

Example:

```js
describe('Feature Test', () => {
  it('should do something', () => {
    // Test steps here
  })
})
