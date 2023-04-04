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
}
export default RegisterPage;
