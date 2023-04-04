/// <reference types="Cypress" />
class HomePage {
  visit() {
    cy.visit("/");
    cy.get(".home-banner-text-section").contains(
      "Free and open-source eCommerce platform"
    );
  }
  loginModal() {
    cy.get(".navigation-top-menu-user-actions > :nth-child(3)").invoke("show");
    cy.wait(2000);
    cy.contains("My account ");
    cy.get(".navigation-top-menu-label")
      .should("exist")
      .should("contain.text", "Log in");
    cy.get(".navigation-top-menu-label")
      .should("exist")
      .should("contain.text", "Register");
    cy.wait(2000);
    // cy.contains("Log in").click({ force: true });
  }
}
export default HomePage;
