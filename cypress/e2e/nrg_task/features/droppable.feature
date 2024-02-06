Feature: Drag and Drop Functionality

  Scenario: Drag and Drop Element
    Given I navigate to the "droppable" page
    When the "droppable" page loads successfully
    And I drag the element and drop it onto the target box
    Then I should see the element successfully dropped
