import AddressPage from "../../pageObjects/AddressPage";
import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegisterPage from "../../pageObjects/RegisterPage";
import SearchPage from "../../pageObjects/SearchPage";
import WalletPage from "../../pageObjects/WalletPage";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
   // HomePage.meWantItButton.click();
  });

  it("Registration", () => {
   // Click account button
    HomePage.accountButton.click();
    //Click login
    HomePage.logInButton.click();
    //Not yet a customer
    LoginPage.assertIsCurrentPage();

    //LoginPage.findNewUserLink("customer").click();
    LoginPage.newCustomerLink.click();
    
    // Filll all register fields
    RegisterPage.assertIsCurrentPage();

    RegisterPage.emailInputField.type("usrname"+ Math.floor(Math.random() * 100)+"@gmail.com");
    RegisterPage.passwordInputField.type("strongPassword123");
    RegisterPage.repeatPasswordInputField.type("strongPassword123");
    RegisterPage.openDropdownItems.click();
    //RegisterPage.allSecurityQuestionItems.eq(10).click();
    RegisterPage.allSecurityQuestionItems
      .contains("Your eldest siblings middle name?")
      .click();
    RegisterPage.answerInputField.type("oto");
    //click Register button
    RegisterPage.registerButton.click();
    //Validate
    LoginPage.assertIsCurrentPage();
    LoginPage.toastMessage.should(
      "have.text",
      "Registration completed successfully. You can now log in."
    )
  });

  it("Login", () => {
    // Click account button
    HomePage.accountButton.click();
    //Click login
    HomePage.logInButton.click();
    //Not yet a customer
    LoginPage.assertIsCurrentPage();
    //Fill login fields
    LoginPage.emailInputField.type("demo");
    LoginPage.passwordInputField.type("demo");
    // Click login button
    LoginPage.loginButton.click();
    //Validate
    HomePage.accountButton.click();
    HomePage.accountItems.eq(0).should("contain", "demo");
  });

  describe("Juice-shop, autologin", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // - Search for Lemon
      SearchPage.searchButton.click();
      SearchPage.searchInputField.type("Lemon{enter}");
      // - Click on Lemon card
      SearchPage.foundCards.contains('Lemon').click();
      // Validate - "Sour but full of vitamins."
      SearchPage.cardInfo.should("contain", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate Lemon", () => {
      // - Search for 500ml
      SearchPage.searchButton.click();
      SearchPage.searchInputField.type("500ml{enter}");
      // - Click on Lemon card
      SearchPage.foundCards.contains('Lemon').click();
      // Validate - "Sour but full of vitamins."
      SearchPage.cardInfo.should("contain", "Sour but full of vitamins.");
    });
    
    it("Search 500ml and validate all cards", () => {
      // - Search for 500ml
      SearchPage.searchButton.click();
      SearchPage.searchInputField.type("500ml{enter}");
      // - Validate Eggfruit => "Now with even more exotic flavour."
      SearchPage.foundCards.contains('Eggfruit').click();
      SearchPage.cardInfo.should("contain", "Now with even more exotic flavour.");
      SearchPage.closeDialogButton.click();
      // - Validate Lemon => "Sour but full of vitamins."
      SearchPage.foundCards.contains('Lemon').click();
      SearchPage.cardInfo.should("contain", "Sour but full of vitamins.");
      SearchPage.closeDialogButton.click();
      // - Validate Strawberry => "Sweet & tasty!"
      SearchPage.foundCards.contains('Strawberry').click();
      SearchPage.cardInfo.should("contain", "Sweet & tasty!");

    });

    it("Validate different sets of available cards -> 12, 24, 36", () => {
      // Set Items per page to 12
      SearchPage.selectArrowButton.click();
      SearchPage.itemsPerPageList.contains('12').click();
      // Validate that we see 12 items
      SearchPage.foundCards.should("have.length", 12);

      // Set Items per page to 24
      SearchPage.selectArrowButton.click();
      SearchPage.itemsPerPageList.contains('24').click();
      // Validate that we see 24 items
      SearchPage.foundCards.should("have.length", 24);

      // Set Items per page to 36
      SearchPage.selectArrowButton.click();
      SearchPage.itemsPerPageList.contains('36').click();
      // Validate that we see 35 items
      SearchPage.foundCards.should("have.length", 35);

    });

    it("Read a review for King", () => {
      // - Search for King
      SearchPage.searchButton.click();
      SearchPage.searchInputField.type("King{enter}");
      SearchPage.foundCards.contains('King').click();
      SearchPage.expandReviews.wait(200).click();
      // - Validate that the review contains "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      SearchPage.reviewsText.should(
        "contain",
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      );
    });

    it("Add a review for Raspberry", () => {
      // - Search for Raspberry
      SearchPage.searchButton.click();
      SearchPage.searchInputField.type("Raspberry{enter}");
      SearchPage.foundCards.contains('Raspberry').click();
      // - Add review => "Tastes like metal"
      SearchPage.reviewInputField.wait(200).type("Tastes like metal");
      SearchPage.submitButton.click();
      SearchPage.toastMessage.should("contain", "You review has been saved.");
      // - Validate that review contains "Tastes like metal"
      SearchPage.expandReviews.wait(200).click();
      SearchPage.reviewsText.should(
        "contain",
        "Tastes like metal"
      );
    });

    it("Add address", () => {
      // Open Saved addresses page (/#/address/saved) (directly)
      AddressPage.visit();
      // Add new address (add all info)
      AddressPage.addAddressButton.click();
      AddressPage.countryInputField.type("Narnia");
      AddressPage.nameInputField.type("Alice");
      AddressPage.mobileNumberInputField.type("21234567");
      AddressPage.zipCodeInputField.type("12345");
      AddressPage.addressInputField.type("Baker street 221B");
      AddressPage.cityInputField.type("Piltover");
      AddressPage.stateInputField.type("Hawaii");
      AddressPage.submitButton.click();
      // validate newly added address
      AddressPage.toastMessage.should(
        "have.text",
        "The address at Piltover has been successfully added to your addresses."
      );
      AddressPage.findRow("Narnia").should(
        "contain",
        "Baker street 221B"
      );
    });

    it("Add Payment option", () => {
      // Open Saved payments page (/#/saved-payment-methods) (directly)
      SearchPage.visit();
      // Add new card (name, card number, expiry date)

      // Validate that card is added
    });
    
    it.only("Increase Wallet Balance", () => {
      // Open wallet page (/#/wallet) (directly)
      WalletPage.visit();
      // Save current balance amount
      // WalletPage.walletBallance.should("be.visible").then((el) => {
      //   cy.wrap(el.text()).as("currentBalanceValue");
      // });
      // Add 100

      // Validate that balance has increased by 100
    });
  });
});
