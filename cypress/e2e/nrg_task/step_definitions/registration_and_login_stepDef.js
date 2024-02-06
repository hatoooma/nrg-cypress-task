import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import RegistrationAndLoginPage from '../pages/registration_and_login_page';
import * as testData from '../../../fixtures/test_data.json';

Then('verify that the registration form title is {string}', (expectedTitle) => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;

  registrationPopup.title().then((title) => {
    const actualTitle = title.text().toUpperCase().trim();
    const expected = expectedTitle.toUpperCase().trim();

    expect(actualTitle).to.equal(expected);
  });
});

Then('verify the registration form field {string} is exist', (targetField) => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;
  registrationPopup[targetField]().should('exist').should('be.visible');
});

Then('verify the registration form hyperlink {string} is working', (targetHyperlink) => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;

  switch (targetHyperlink) {
    case 'Already Have an Account?': {
      registrationPopup.already_have_acc().should('contain', 'Already Have an Account? | Signin');
      registrationPopup.already_have_acc().find('a').should('have.attr', 'href', '#login');
      break;
    }

    case 'ENTER TO THE TESTING WEBSITE': {
      registrationPopup.hyperlink_1().should('contain', 'ENTER TO THE TESTING WEBSITE');
      registrationPopup
        .hyperlink_1()
        .find('a')
        .should('have.attr', 'href', 'https://www.way2automation.com/way2auto_jquery/automation-practice-site.html');
      break;
    }

    case 'EXPLORE LIFETIME MEMBERSHIP': {
      registrationPopup.hyperlink_2().should('contain', 'EXPLORE LIFETIME MEMBERSHIP');
      registrationPopup.hyperlink_2().find('a').should('have.attr', 'href', 'https://www.way2automation.com/lifetime-membership-club/');
      break;
    }

    default:
      throw new Error(`Unknown hyperlink: ${targetHyperlink}`);
  }
});

When('I try to submit the form with empty fields', () => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;
  registrationPopup.submit_btn().click();
});

Then('verify the field {string} error message', (targetField) => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;

  registrationPopup[targetField]().then(($el) => {
    const nameError = $el[0].checkValidity();
    expect(nameError).to.equal(false);
  });
});

When('I submit the form with valid data', () => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;
  const username = `hatem_${Math.floor(Math.random() * 1000)}`;
  const email = `${username}@nrg-it.com`;

  testData.valid.username = username;
  testData.valid.email = email;

  registrationPopup.name().type(testData.valid.name);
  registrationPopup.phone().type(testData.valid.phone);
  registrationPopup.email().type(testData.valid.email);
  registrationPopup.country().select(testData.valid.country);
  registrationPopup.city().type(testData.valid.city);
  registrationPopup.username().type(testData.valid.username);
  registrationPopup.password().type(testData.valid.password);

  registrationPopup.submit_btn().click();
});

Then('verify the success message: {string}', (expectedMsg) => {
  const openedPopup = RegistrationAndLoginPage.elements.opened_popup();
  openedPopup.find('[id^="alert"]').should('contain', expectedMsg);
});

When('I open the login form', () => {
  const registrationPopup = RegistrationAndLoginPage.elements.registration_popup;
  registrationPopup.already_have_acc().find('a').click();
});

Then('verify that the login form title is {string}', (expectedTitle) => {
  const loginPopup = RegistrationAndLoginPage.elements.login_popup;

  loginPopup.title().then((title) => {
    const actualTitle = title.text().toUpperCase().trim();
    const expected = expectedTitle.toUpperCase().trim();

    expect(actualTitle).to.equal(expected);
  });
});

When('I try to login with valid credentials', () => {
  const loginPopup = RegistrationAndLoginPage.elements.login_popup;
  loginPopup.username().type(testData.valid.username);
  loginPopup.password().type(testData.valid.password);
  loginPopup.submit_btn().click();
});
