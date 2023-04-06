/// <reference types="Cypress" />
import { data } from "cypress/types/jquery";
import fake from "../../fixtures/faker";
import LoginPage from "../../support/page-objects/user/login-page.po";
describe("Visit Login Page", () => {
  var loginPage = new LoginPage();
  beforeEach(() => {
    // Load the test data from fixtures
    cy.fixture("data").as("data");
  });
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
    loginPage.passwordInput().type(fake.words());
    loginPage.loginBtn().click();
    loginPage.loginPageLoad();
    loginPage.loginValidationMessage();
  });
  it("and verify login with valid username and passwrod", () => {
    loginPage.visit();
    loginPage.validLoginData();
    loginPage.rememberMeCheck().click();
    loginPage.loginBtn().click();
    cy.visit("/");
  });
});
