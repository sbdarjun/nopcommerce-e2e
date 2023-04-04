/// <reference types="Cypress" />
import LoginPage from "../support/page-objects/login-page.po";
describe("Visit Login Page", () => {
  it("and validate component", () => {
    var loginPage = new LoginPage();
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
});
