/// <reference types="Cypress" />
import LandingPage from "../support/page-objects/landing-page.po";
describe("Visit Home Page", () => {
  it("and validate component", () => {
    var landingPage = new LandingPage();
    landingPage.visit();
    landingPage.loginModal();
  });
});
