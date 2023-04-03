/// <reference types="Cypress" />
class HomePage{
visit(){
    cy.visit('/')
    cy.get('.home-banner-text-section').contains('Free and open-source eCommerce platform')
}
}
export default HomePage;