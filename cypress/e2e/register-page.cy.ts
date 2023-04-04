/// <reference types="Cypress" />
import fake from "../fixtures/faker";
import RegisterPage from "../support/page-objects/register-page.po";
describe("Visit Register Page", () => {
  it("and validate component", () => {
    var registerPage = new RegisterPage();
    registerPage.visit();
    registerPage.registerTitle();
    registerPage.firstName();
    registerPage.firstNameInput().type(fake.firstName());
    registerPage.lastName();
    registerPage.lastNameInput().type(fake.lastName());
    registerPage.email();
    registerPage.emailInput().type(fake.email());
    registerPage.confirmEmail();
  });
});
