Feature: Registration and Login

  Background: navigate to the registration page
    Given I navigate to the "registration" page
    When the "registration" page loads successfully

  Scenario: Registration Form Title Validation
    Then verify that the registration form title is "DUMMY REGISTRATION FORM"

  Scenario Outline: Registration Form "Hyperlinks Validations" | <string>
    Then verify the registration form hyperlink "<string>" is working
    Examples:
      | string                       |
      | Already Have an Account?     |
      | ENTER TO THE TESTING WEBSITE |
      | EXPLORE LIFETIME MEMBERSHIP  |

  Scenario Outline: Registration Form "Fields Validations" | <string>
    Then verify the registration form field "<string>" is exist
    Examples:
      | string   |
      | name     |
      | phone    |
      | email    |
      | country  |
      | city     |
      | username |
      | password |

  Scenario Outline: Empty Fields Submission | <string>
    When I try to submit the form with empty fields
    Then verify the field "<string>" error message
    Examples:
      | string   |
      | name     |
      | phone    |
      | email    |
      | city     |
      | username |
      | password |

  Scenario: Successful Registration
    When I submit the form with valid data
    Then verify the success message: "This is just a dummy form, you just clicked SUBMIT BUTTON"

  Scenario: Login Form Validation
    When I open the login form
    Then verify that the login form title is "LOGIN"

  Scenario: Successful Login E2E
    When I submit the form with valid data
    And I open the login form
    And I try to login with valid credentials
    Then verify the success message: "This is just a dummy form, you just clicked LOGIN"
