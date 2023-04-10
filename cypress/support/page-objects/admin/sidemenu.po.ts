/// <reference types="Cypress" />
class SideMenu {
  sideMenu() {
    return cy.get(".os-content").should("exist");
  }
  hamburgerIcon() {
    return cy.get("#nopSideBarPusher").should("exist");
  }
  search() {
    return cy.get(".form-control").should("exist");
  }
  dashboard() {
    return cy.get(".nav-item").contains("Dashboard");
  }
  catalog() {
    return cy.get(".nav-item").contains("Catalog");
  }
  products() {
    return cy.get(".nav-item").contains("Products");
  }
  categories() {
    return cy.get(".nav-item").contains("Categories");
  }
  manufacturers() {
    return cy.get(".nav-item").contains("Manufacturers");
  }
  productReviews() {
    return cy.get(".nav-item").contains("Product reviews");
  }
  productTags() {
    return cy.get(".nav-item").contains("Product tags");
  }
  attributes() {
    return cy.get(".nav-item").contains("Attributes");
  }
  productAttributes() {
    return cy.get(".nav-item").contains("Product attributes");
  }
  specificationAttributes() {
    return cy.get(".nav-item").contains("Specification attributes");
  }
  checkoutAttributes() {
    return cy.get(".nav-item").contains("Checkout attributes");
  }
  sales() {
    return cy.get(".nav-item").contains("Sales");
  }
  orders() {
    return cy.get(".nav-item").contains("Orders");
  }
  shipments() {
    return cy.get(".nav-item").contains("Shipments");
  }
  recurringPayments() {
    return cy.get(".nav-item").contains("Recurring payments");
  }
  giftCards() {
    return cy.get(".nav-item").contains("Gift cards");
  }
  shoppingAndWishlists() {
    return cy.get(".nav-item").contains("Shopping carts and wishlists");
  }
  customers() {
    return cy.get(".nav-item").contains("Customers");
  }
  customerRoles() {
    return cy.get(".nav-item").contains("Customer roles");
  }
  onlineCustomers() {
    return cy.get(".nav-item").contains("Online customers");
  }
  returnRequests() {
    return cy.get(".nav-item").contains("Return requests");
  }
  disableSearch() {
    this.search().should("not.be.visible");
  }
  vendors() {
    return cy.get(".nav-item").contains("Vendors");
  }
  activityLog() {
    return cy.get(".nav-item").contains("Activity log");
  }
  activityTypes() {
    return cy.get(".nav-item").contains("Activity Types");
  }
  gdpRequests() {
    return cy.get(".nav-item").contains("GDPR requests (log)");
  }
  promotions() {
    return cy.get(".nav-item").contains("Promotions");
  }
  discounts() {
    return cy.get(".nav-item").contains("Discounts");
  }
  affiliates() {
    return cy.get(".nav-item").contains("Affiliates");
  }
  newsletterSubscribers() {
    return cy.get(".nav-item").contains("Newsletter subscribers");
  }
  campaigns() {
    return cy.get(".nav-item").contains("Campaigns");
  }
  contentManagement() {
    return cy.get(".nav-item").contains("Content management");
  }
  topics() {
    return cy.get(".nav-item").contains("Topics (pages)");
  }
  messageTemplates() {
    return cy.get(".nav-item").contains("Message templates");
  }
  newsComments() {
    return cy.get(".nav-item").contains("News comments");
  }
  blogPosts() {
    return cy.get(".nav-item").contains("Blog posts");
  }
  blogComments() {
    return cy.get(".nav-item").contains("Blog comments");
  }
  newsItems() {
    return cy.get(".nav-item").contains("News items");
  }
  polls() {
    return cy.get(".nav-item").contains("Polls");
  }
  forums() {
    return cy.get(".nav-item").contains("Forums");
  }
  configuration() {
    return cy.get(".nav-item").contains("Configuration");
  }
  settings() {
    return cy.get(".nav-item").contains("Settings");
  }
  generalSettings() {
    return cy.get(".nav-item").contains("General settings");
  }
  customerSettings() {
    return cy.get(".nav-item").contains("Customer settings");
  }
  orderSettings() {
    return cy.get(".nav-item").contains("Order settings");
  }
  shippingSettings() {
    return cy.get(".nav-item").contains("Shipping settings");
  }
  taxSettings() {
    return cy.get(".nav-item").contains("Tax settings");
  }
  catalogsettings() {
    return cy.get(".nav-item").contains("Catalog settings");
  }
  shoppingCartSettings() {
    return cy.get(".nav-item").contains("Shopping cart settings");
  }
  rewardPoints() {
    return cy.get(".nav-item").contains("Reward points");
  }
  gdprSettings() {
    return cy.get(".nav-item").contains("GDPR settings");
  }
  vendorSettings() {
    return cy.get(".nav-item").contains("Vendor settings");
  }
  blogSettings() {
    return cy.get(".nav-item").contains("Blog settings");
  }
  newsSettings() {
    return cy.get(".nav-item").contains("News settings");
  }
  forumSettings() {
    return cy.get(".nav-item").contains("Forum settings");
  }
  mediaSettings() {
    return cy.get(".nav-item").contains("Media settings");
  }
  allSettings() {
    return cy.get(".nav-item").contains("All settings (advanced)");
  }
  emailAccounts() {
    return cy.get(".nav-item").contains("Email accounts");
  }
  stores() {
    return cy.get(".nav-item").contains("Stores");
  }
  countries() {
    return cy.get(".nav-item").contains("Countries");
  }
  languages() {
    return cy.get(".nav-item").contains("Languages");
  }
  currencies() {
    return cy.get(".nav-item").contains("Currencies");
  }
  paymentMethods() {
    return cy.get(".nav-item").contains("Payment methods");
  }
  paymentRestrictions() {
    return cy.get(".nav-item").contains("Payment restrictions");
  }
}
export default SideMenu;
