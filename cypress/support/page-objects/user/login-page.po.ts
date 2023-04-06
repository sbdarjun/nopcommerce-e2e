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
  loginPageLoad() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/en/login");
  }
  loginValidationMessage() {
    return cy.get(".message-error", { timeout: 10000 }).should("be.visible");
  }
  validLoginData() {
    cy.fixture("data").then((data) => {
      this.userNameInput().type(data.validUsers.email);
      this.passwordInput().type(data.validUsers.password);
    });
  }
}
export default LoginPage;
