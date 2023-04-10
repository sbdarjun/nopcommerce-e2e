/// <reference types="Cypress" />
class HomePage {
  nopCommerceLogo() {
    return cy.get(".brand-image-xl").should("exist");
  }
  sideMenu() {
    return cy.get(".os-content-glue").should("exist");
  }
  hamburgerIcon() {
    return cy.get("#nopSideBarPusher").should("exist");
  }
  adminName() {
    return cy.get(".navbar-nav > :nth-child(2)").should("exist");
  }
  logout() {
    return cy.get(".nav-link").contains("Logout");
  }
  headerContent() {
    return cy.get(".content-header").contains("Dashboard");
  }
  newsBox() {
    return cy.get("#nopcommerce-news-box").should("exist");
  }
  commonStatistics() {
    return cy.get("#nopcommerce-common-statistics-card").should("exist");
  }
  orderCard() {
    return cy.get("#order-statistics-card").should("exist");
  }
  newCustomerCard() {
    return cy.get("#customer-statistics-card").should("exist");
  }
  totalOrderCard() {
    return cy.get("#order-average-report-card").should("exist");
  }
  orderIncompleteCard() {
    return cy.get("#order-incomplete-report-card").should("exist");
  }
  latestOrderCard() {
    return cy.get("#latest-orders-card").should("exist");
  }
  popularSearchCard() {
    return cy.get("#popular-search-terms-card").should("exist");
  }
  bestSellerByQtyCard() {
    return cy.get("#bestsellers-report-quantity-card").should("exist");
  }
  bestSellerByAmountCard() {
    return cy.get("#bestsellers-report-amount-card").should("exist");
  }
  adminLogout() {
    cy.fixture("data").then((data) => {
      this.logout().click();
      cy.visit("/login");
    });
  }
}
export default HomePage;
