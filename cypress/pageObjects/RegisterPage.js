import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
  static get url() {
    return "/register";
  }

  static get emailInputField(){
    return cy.get("#emailControl");
  }
  
  static get passwordInputField(){
    return cy.get("#passwordControl");
  }

  static get repeatPasswordInputField(){
    return cy.get("#repeatPasswordControl");
  }

  static get openDropdownItems(){
    return cy.get(".mat-select");
  }

  static get allSecurityQuestionItems(){
    return cy.get(".mat-option-text");
  }

  static get answerInputField(){
    return cy.get("#securityAnswerControl");
  }

  static get registerButton(){
    return cy.get("#registerButton");
  }
}

export default RegisterPage;
