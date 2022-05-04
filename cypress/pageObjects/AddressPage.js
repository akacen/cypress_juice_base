import BasePage from "../pageObjects/basePage";

class AddressPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addAddressButton(){
      return cy.get(".btn-new-address"); 
  }

  static get countryInputField(){
    return cy.get("[data-placeholder='Please provide a country.']"); 
  }
  
  static get nameInputField(){
    return cy.get("[data-placeholder='Please provide a name.']"); 
  }

  static get mobileNumberInputField(){
    return cy.get("[data-placeholder='Please provide a mobile number.']"); 
  }
 
  static get zipCodeInputField(){
    return cy.get("[data-placeholder='Please provide a ZIP code.']"); 
  }
 
  static get addressInputField(){
    return cy.get("[data-placeholder='Please provide an address.']"); 
  }
 
  static get cityInputField(){
    return cy.get("[data-placeholder='Please provide a city.']"); 
  }
 
  static get stateInputField(){
    return cy.get("[data-placeholder='Please provide a state.']"); 
  }

  static get rows(){
    return cy.get("[role='row']"); 
  }
 
  static findRow(value){
      return this.rows.contains(value).parent();
  }

}

export default AddressPage;
