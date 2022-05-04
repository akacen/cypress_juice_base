import BasePage from "./basePage";

class LoginPage extends BasePage {
  static get url() {
    return "/login";
  }

  static get emailInputField(){
    return cy.get("#email");
  }

  static get passwordInputField(){
    return cy.get("#password");
  }

  static get loginButton(){
    return cy.get("#loginButton");
  }

  static get newCustomerLink(){
    return cy.get("#newCustomerLink");
  }

}

export default LoginPage;
