import { When } from '@badeball/cypress-cucumber-preprocessor';
import DroppablePage from '../pages/droppable_page';

When('I drag the element and drop it onto the target box', () => {
  DroppablePage.elements.dragBox().trigger('mousedown', { which: 1 });
  DroppablePage.elements.dropBox().trigger('mousemove').trigger('mouseup', { force: true });
});

When('I should see the element successfully dropped', () => {
  DroppablePage.elements.dropBox().then((el) => {
    expect(el.text()).to.contains('Dropped!');
    cy.screenshot('I should see the element successfully dropped');
  });
});
