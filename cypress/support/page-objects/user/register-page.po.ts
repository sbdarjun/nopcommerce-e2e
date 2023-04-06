/// <reference types="Cypress" />
class RegisterPage {
  visit() {
    cy.visit("/register");
    cy.get(".page-title").contains("Register");
  }
  registerTitle() {
    return cy.get(".section-title").contains("Your Personal Details");
  }
  firstName() {
    return cy.get(".input-label").contains("First name");
  }
  firstNameInput() {
    return cy.get("#FirstName").should("exist");
  }
  lastName() {
    return cy.get(".input-label").contains("Last name");
  }
  lastNameInput() {
    return cy.get("#LastName").should("exist");
  }
  email() {
    return cy.get(".input-label").contains("Email");
  }
  emailInput() {
    return cy.get("#Email").should("exist");
  }
  confirmEmail() {
    return cy.get(".input-label").contains("Confirm email");
  }
  confirmEmailInput() {
    return cy.get("#ConfirmEmail").should("exist");
  }
  userName() {
    return cy.get(".input-label").contains("Username:");
  }
  UserNameInput() {
    return cy.get("#Username").should("exist");
  }
  checkAvailabilityBtn() {
    return cy.get("#check-availability-button").should("exist");
  }
  country() {
    return cy.get(".input-label").contains("Country");
  }
  selectCountry() {
    return cy.get("#CountryId").should("exist");
  }
  timeZone() {
    return cy.get(".input-label").contains("Time zone");
  }
  selectTimeZone() {
    return cy.get("#TimeZoneId").should("exist");
  }
  newsLetter() {
    return cy.get("#Newsletter").should("exist");
  }
  passwordTitle() {
    return cy.get(".section-title").contains("Your Password");
  }
  password() {
    return cy.get(".input-label").contains("Password");
  }
  passwordInput() {
    return cy.get("#Password").should("exist");
  }
  confirmPassword() {
    return cy.get(".input-label").contains("Confirm password");
  }
  confirmPasswordInput() {
    return cy.get("#ConfirmPassword").should("exist");
  }
  accountDetails() {
    return cy.get(".section-title").contains("Your Account Details");
  }
  companyPrimarily() {
    return cy.get(".input-label").contains("My company primarily");
  }
  companyPrimarilyInput() {
    return cy.get("#Details_CompanyIndustryId").should("exist");
  }
  companyActivity() {
    return cy
      .get(".input-label")
      .contains("My main activity in the company is");
  }
  companyActivityInput() {
    return cy.get("#Details_CompanyRoleId").should("exist");
  }
  numberOfPeople() {
    return cy
      .get(".input-label")
      .contains("How many people work for your company?");
  }
  numberOfPeopleInput() {
    return cy.get("#Details_CompanySizeId").should("exist");
  }
  companyWebsite() {
    return cy.get(".input-label").contains("My company’s website (if any)");
  }
  companyWebsiteInput() {
    return cy.get("#Details_CompanyWebsiteUrl").should("exist");
  }
  registerBtn() {
    return cy.get("#register-button").should("exist");
  }
  firstNameRequired() {
    return cy
      .get("#FirstName-error")
      .contains("First name is required")
      .should("be.visible");
  }
  lastNameRequired() {
    return cy
      .get("#LastName-error")
      .contains("Last name is required")
      .should("be.visible");
  }
  emailRequired() {
    return cy
      .get("#Email-error")
      .contains("Email is required")
      .should("be.visible");
  }
  confirmEmailRequired() {
    return cy
      .get("#ConfirmEmail-error")
      .contains("Email is required")
      .should("be.visible");
  }
  userNameRequired() {
    return cy
      .get("#Username-error")
      .contains("Username is required")
      .should("be.visible");
  }
  passwordRequired() {
    return cy
      .get("#Password-error")
      .contains("Password is required")
      .should("be.visible");
  }
  confirmPasswordRequired() {
    return cy
      .get("#ConfirmPassword-error")
      .contains("Password is required")
      .should("be.visible");
  }
  checkAvailabilityText() {
    return cy
      .get("#username-availabilty")
      .contains("Username available")
      .should("be.visible");
  }
  registerSuccess() {
    return cy.get(".page registration-result-page").should("be.visible");
  }
  selectRandomCountry() {
    cy.get("#CountryId").then(($countryList) => {
      // Get the list items in the list
      const countryOptions = $countryList.find("option");
      // Get a random index between 1 and the length of the options
      const randomIndex = Cypress._.random(1, countryOptions.length - 1);
      // Get the text of the random option
      const randomCountryText = countryOptions[randomIndex].textContent.trim();
      // Select the random option
      cy.get("#CountryId").select(randomIndex);
      // Assert that the selected option is now displayed
      cy.log("Selected country:", randomCountryText);
    });
  }
  selectRandomTimeZone() {
    cy.get("#TimeZoneId").then(($timeList) => {
      const timeOptions = $timeList.find("option");
      const randomIndex = Cypress._.random(1, timeOptions.length - 1);
      const randomCountryText = timeOptions[randomIndex].textContent.trim();
      cy.get("#TimeZoneId").select(randomIndex);
      cy.log("Selected Timezone:", randomCountryText);
    });
  }
  selectRandomCompanyPrimarily() {
    cy.get("#Details_CompanyIndustryId").then(($companyPrimarilyList) => {
      const companyPrimarily = $companyPrimarilyList.find("option");
      const randomIndex = Cypress._.random(1, companyPrimarily.length - 1);
      const randomCountryText =
        companyPrimarily[randomIndex].textContent.trim();
      cy.get("#Details_CompanyIndustryId").select(randomIndex);
      cy.log("Selected Company Primarily:", randomCountryText);
    });
  }
  selectRandomCompanyActivity() {
    cy.get("#Details_CompanyRoleId").then(($companyActivityList) => {
      const companyActivity = $companyActivityList.find("option");
      const randomIndex = Cypress._.random(1, companyActivity.length - 1);
      const randomCountryText = companyActivity[randomIndex].textContent.trim();
      cy.get("#Details_CompanyRoleId").select(randomIndex);
      cy.log("Selected Company Activity:", randomCountryText);
    });
  }
  selectRandomCompanySize() {
    cy.get("#Details_CompanySizeId").then(($companySizeList) => {
      const companySize = $companySizeList.find("option");
      const randomIndex = Cypress._.random(1, companySize.length - 1);
      const randomCountryText = companySize[randomIndex].textContent.trim();
      cy.get("#Details_CompanySizeId").select(randomIndex);
      cy.log("Selected Company Activity:", randomCountryText);
    });
  }
}
export default RegisterPage;
