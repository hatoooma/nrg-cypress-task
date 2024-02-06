class RegistrationAndLoginPage {
  elements = {
    opened_popup: () => cy.get('[class$="fancybox-opened"]'),

    registration_popup: {
      title: () => this.getInsideOpenedPopup('h3'),
      alert: () => this.getInsideOpenedPopup('[id^="alert"]'),

      name: () => this.getInsideOpenedPopup('[name="name"]'),
      phone: () => this.getInsideOpenedPopup('[name="phone"]'),
      email: () => this.getInsideOpenedPopup('[name="email"]'),
      country: () => this.getInsideOpenedPopup('[name="country"]'),
      city: () => this.getInsideOpenedPopup('[name="city"]'),
      username: () => this.getInsideOpenedPopup('[name="username"]'),
      password: () => this.getInsideOpenedPopup('[name="password"]'),
      submit_btn: () => this.getInsideOpenedPopup('[type="submit"]'),

      already_have_acc: () => this.getInsideOpenedPopup('[class="text_popup"]').eq(0),
      hyperlink_1: () => this.getInsideOpenedPopup('[class="text_popup"]').eq(1),
      hyperlink_2: () => this.getInsideOpenedPopup('[class="text_popup"]').eq(2)
    },

    login_popup: {
      title: () => this.getInsideOpenedPopup('h3'),
      alert: () => this.getInsideOpenedPopup('[id^="alert"]'),

      username: () => this.getInsideOpenedPopup('[name="username"]'),
      password: () => this.getInsideOpenedPopup('[name="password"]'),
      submit_btn: () => this.getInsideOpenedPopup('[type="submit"]')
    }
  };

  // function example
  getInsideOpenedPopup(newElement) {
    return this.elements.opened_popup().find(newElement);
  }
}

export default new RegistrationAndLoginPage();
