/// <reference types="Cypress" />
import cypress = require("cypress");
import AdminLogin from "../../support/page-objects/admin/admin-login.po";
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
});
