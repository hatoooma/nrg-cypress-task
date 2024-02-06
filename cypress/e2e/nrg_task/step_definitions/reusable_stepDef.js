import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as routes from '../../../fixtures/routes.json';

Given('I navigate to the {string} page', (pageName) => {
  const page = routes[pageName];
  cy.visit(page);
  cy.viewport('macbook-16');
});

Then('the {string} page loads successfully', (pageName) => {
  const page = routes[pageName];
  cy.url().should('eq', Cypress.config().baseUrl + page);
});
