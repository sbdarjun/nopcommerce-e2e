/// <reference types="Cypress" />
import cypress = require("cypress");
import AdminLogin from "../../support/page-objects/admin/admin-login.po";
import fake from "../../fixtures/faker";
describe("Visit Admin Login Page", () => {
  var adminLogin = new AdminLogin();
  //   cy.visit(Cypress.env("adminUrl"));
  it("and validate component", () => {
    adminLogin.visit();
    adminLogin.pageTitle();
    adminLogin.email();
    adminLogin.emailInput();
    adminLogin.password();
    adminLogin.passwordInput();
    adminLogin.rememberMe();
    adminLogin.logInBtn();
    adminLogin.loginPageBottomText();
  });
  it("and verify invalid email", () => {
    adminLogin.visit();
    adminLogin.emailInput().clear();
    adminLogin.passwordInput();
    adminLogin.rememberMe().click();
    adminLogin.logInBtn().click();
  });
  it("and verify invalid email and password", () => {
    adminLogin.visit();
    adminLogin.emailInput().clear().type(fake.email());
    adminLogin.passwordInput().clear().type(fake.words());
    adminLogin.logInBtn().click();
    adminLogin.validationMessage();
  });
  it("and verify admin login", () => {
    adminLogin.visit();
    adminLogin.validAdminLoginData();
    adminLogin.rememberMe().click();
    adminLogin.logInBtn().click();
    cy.url().should("be.equals", "https://admin-demo.nopcommerce.com/admin/");
  });
});
