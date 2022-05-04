import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get accountButton(){
    return cy.get("#navbarAccount");
  }

  static get logInButton(){
    return cy.get("#navbarLoginButton");
  }

  static get accountItems(){
    return cy.get("[role='menuitem']");
  }

}

export default HomePage;
