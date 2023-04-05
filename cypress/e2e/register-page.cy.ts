/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";
import RegisterPage from "../support/page-objects/register-page.po";
import { words } from "cypress/types/lodash";
import fake from "../fixtures/faker";
describe("Visit Register Page", () => {
  var registerPage = new RegisterPage();
  var email = faker.internet.email();
  var password = faker.random.words();

  it("and validate component", () => {
    registerPage.visit();
    registerPage.registerTitle();
    registerPage.firstName();
    registerPage.firstNameInput();
    registerPage.lastName();
    registerPage.lastNameInput();
    registerPage.email();
    registerPage.emailInput();
    registerPage.confirmEmail();
    registerPage.confirmEmailInput();
    registerPage.userName();
    registerPage.UserNameInput();
    registerPage.checkAvailabilityBtn();
    registerPage.country();
    registerPage.selectCountry();
    registerPage.timeZone();
    registerPage.selectTimeZone();
    registerPage.newsLetter();
    registerPage.passwordTitle();
    registerPage.password();
    registerPage.passwordInput();
    registerPage.confirmPassword();
    registerPage.confirmPasswordInput();
    registerPage.accountDetails();
    registerPage.companyPrimarily();
    registerPage.companyPrimarilyInput();
    registerPage.companyActivity();
    registerPage.companyActivityInput();
    registerPage.numberOfPeople();
    registerPage.numberOfPeopleInput();
    registerPage.companyWebsite();
    registerPage.companyWebsiteInput();
    registerPage.registerBtn();
  });
  it("and validate required fields", () => {
    registerPage.visit();
    registerPage.registerBtn().click();
    registerPage.firstNameRequired();
    registerPage.lastNameRequired();
    registerPage.emailRequired();
    registerPage.confirmEmailRequired();
    registerPage.userNameRequired();
    registerPage.passwordRequired();
    registerPage.confirmEmailRequired();
  });
  it("and verify registration process", () => {
    registerPage.visit();
    registerPage.firstNameInput().type(fake.firstName());
    registerPage.lastNameInput().type(fake.lastName());
    registerPage.emailInput().type(email);
    registerPage.confirmEmail().type(email);
    registerPage.UserNameInput().type(email);
    registerPage.checkAvailabilityBtn().click();
    registerPage.checkAvailabilityText();
    registerPage.selectRandomCountry();
    registerPage.selectRandomTimeZone();
    registerPage.newsLetter().click({ force: true });
    registerPage.passwordInput().type(password);
    registerPage.confirmPasswordInput().type(password);
    registerPage.selectRandomCompanyPrimarily();
    registerPage.selectRandomCompanyActivity();
    registerPage.selectRandomCompanySize();
    registerPage.companyWebsiteInput().type(fake.url());
    registerPage.registerBtn().click();
    registerPage.registerSuccess();
  });
});
