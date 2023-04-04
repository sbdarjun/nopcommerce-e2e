/// <reference types="Cypress" />
import fake from "../fixtures/faker";
import LoginPage from "../support/page-objects/login-page.po";
describe("Visit Login Page", () => {
  var loginPage = new LoginPage();
  it("and validate component", () => {
    loginPage.visit();
    loginPage.loginTitle();
    loginPage.userName();
    loginPage.userNameInput();
    loginPage.password();
    loginPage.passwordInput();
    loginPage.rememberMeCheck();
    loginPage.rememberMe();
    loginPage.loginBtn();
  });
  it("and verify message without input login data", () => {
    loginPage.visit();
    cy.wait(2000);
    loginPage.loginBtn().click();
    loginPage.loginPageLoad();
    loginPage.loginValidationMessage();
  });
  it("and vaerify login with invalid username and password", () => {
    loginPage.visit();
    loginPage.userNameInput().type(fake.email());
    loginPage.passwordInput().type(fake.word());
    loginPage.loginBtn().click();
    loginPage.loginPageLoad();
    loginPage.loginValidationMessage();
  });
});
