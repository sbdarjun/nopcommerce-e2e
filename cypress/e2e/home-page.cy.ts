/// <reference types="Cypress" />
import HomePage from "../support/page-objects/home-page.po";
describe("Visit Home Page", () => {
  it("and validate component", () => {
    var homePage = new HomePage();
    homePage.visit();
    homePage.loginModal();
  });
});
