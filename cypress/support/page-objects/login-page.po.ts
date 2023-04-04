/// <reference types="Cypress" />
class LoginPage {
  visit() {
    cy.visit("/login");
  }
  loginTitle() {
    return cy.get(".section-title").contains("Returning Customer");
  }
  userName() {
    return cy.get(".input-label").contains("Username");
  }
  userNameInput() {
    return cy.get("#Username").should("exist");
  }
  password() {
    return cy.get(".input-label").contains("Password");
  }
  passwordInput() {
    return cy.get("#Password").should("exist");
  }
  rememberMeCheck() {
    return cy.get(".custom-control-label").contains("Remember me?");
  }
  rememberMe() {
    return cy.get("#RememberMe").should("exist");
  }
  forgetPassword() {
    return cy.get(".forgot-password").contains("Forgot username or password?");
  }
  loginBtn() {
    return cy.get(".buttons").contains("Log in");
  }
}
export default LoginPage;
