class DroppablePage {
  elements = {
    iframe: () => cy.get('[id="example-1-tab-1"] iframe'),
    dragBox: () => this.getInsideIFrame('[id="draggable"]'),
    dropBox: () => this.getInsideIFrame('[id="droppable"]')
  };

  // function example
  getInsideIFrame(newElement) {
    return this.elements.iframe().its('0.contentDocument').its('body').find(newElement);
  }
}

export default new DroppablePage();
