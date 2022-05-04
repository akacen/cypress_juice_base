import BasePage from "./basePage";

class SearchPage extends BasePage {
  static get url() {
    return "/search";
  }

  static get searchButton(){
    return cy.get("#searchQuery");

  }

  static get searchInputField(){
    return cy.get("#searchQuery input");
  }

  static get foundCards(){
    return cy.get("[aria-label='Click for more information about the product']");
  }

  static get cardInfo(){
    return cy.get(".mat-dialog-content");
  }

  static get closeDialogButton(){
    return cy.get(".close-dialog");
  }

  static get selectArrowButton(){
    return cy.get(".mat-select-arrow");
  }

  static get itemsPerPageList(){
    return cy.get(".mat-option-text");
  }

  static get expandReviews(){
    return cy.get(".mat-expansion-panel-header-title");
  }

  static get reviewsText(){
    return cy.get(".review-text");
  }

  static get reviewInputField(){
    return cy.get("textarea[aria-label='Text field to review a product']");
  }
}

export default SearchPage;