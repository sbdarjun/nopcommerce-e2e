/// <reference types="Cypress" />

import HomePage from "../../support/page-objects/admin/home-page.po";

describe("Visit admin dashboard", () => {
  var homePage = new HomePage();
  beforeEach(() => {
    cy.login();
  });
  afterEach(() => {
    cy.logout();
  });
  it("and validate component", () => {
    // homePage.visit();
    homePage.nopCommerceLogo();
    homePage.sideMenu();
    homePage.hamburgerIcon();
    homePage.adminName();
    homePage.headerContent();
    homePage.newsBox();
    homePage.commonStatistics();
    homePage.orderCard();
    homePage.newCustomerCard();
    homePage.totalOrderCard();
    homePage.orderIncompleteCard();
    homePage.latestOrderCard();
    homePage.popularSearchCard();
    homePage.bestSellerByQtyCard();
    homePage.bestSellerByAmountCard();
    homePage.logout();
  });
});
