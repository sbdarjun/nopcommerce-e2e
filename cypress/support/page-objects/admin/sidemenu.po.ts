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
    return cy.get(".nav-item").contains("Dashboard").should("be.visible");
  }
  catalog() {
    return cy.get(".nav-item").contains("Catalog").should("be.visible");
  }
  products() {
    return cy.get(".nav-item").contains("Products").should("be.visible");
  }
  categories() {
    return cy.get(".nav-item").contains("Categories").should("be.visible");
  }
  manufacturers() {
    return cy.get(".nav-item").contains("Manufacturers").should("be.visible");
  }
  productReviews() {
    return cy.get(".nav-item").contains("Product reviews").should("be.visible");
  }
  productTags() {
    return cy.get(".nav-item").contains("Product tags").should("be.visible");
  }
  attributes() {
    return cy.get(".nav-item").contains("Attributes").should("be.visible");
  }
  productAttributes() {
    return cy
      .get(".nav-item")
      .contains("Product attributes")
      .should("be.visible");
  }
  specificationAttributes() {
    return cy
      .get(".nav-item")
      .contains("Specification attributes")
      .should("be.visible");
  }
  checkoutAttributes() {
    return cy
      .get(".nav-item")
      .contains("Checkout attributes")
      .should("be.visible");
  }
  sales() {
    return cy.get(".nav-item").contains("Sales").should("be.visible");
  }
  orders() {
    return cy.get(".nav-item").contains("Orders").should("be.visible");
  }
  shipments() {
    return cy.get(".nav-item").contains("Shipments").should("be.visible");
  }
  recurringPayments() {
    return cy
      .get(".nav-item")
      .contains("Recurring payments")
      .should("be.visible");
  }
  giftCards() {
    return cy.get(".nav-item").contains("Gift cards").should("be.visible");
  }
  shoppingAndWishlists() {
    return cy
      .get(".nav-item")
      .contains("Shopping carts and wishlists")
      .should("be.visible");
  }
  customers() {
    return cy.get(".nav-item").contains("Customers").should("be.visible");
  }
  customerRoles() {
    return cy.get(".nav-item").contains("Customer roles").should("be.visible");
  }
  onlineCustomers() {
    return cy
      .get(".nav-item")
      .contains("Online customers")
      .should("be.visible");
  }
  returnRequests() {
    return cy.get(".nav-item").contains("Return requests").should("be.visible");
  }
  disableSearch() {
    this.search().should("not.be.visible");
  }
  vendors() {
    return cy.get(".nav-item").contains("Vendors").should("be.visible");
  }
  activityLog() {
    return cy.get(".nav-item").contains("Activity log").should("be.visible");
  }
  activityTypes() {
    return cy.get(".nav-item").contains("Activity Types").should("be.visible");
  }
  gdpRequests() {
    return cy
      .get(".nav-item")
      .contains("GDPR requests (log)")
      .should("be.visible");
  }
  promotions() {
    return cy.get(".nav-item").contains("Promotions").should("be.visible");
  }
  discounts() {
    return cy.get(".nav-item").contains("Discounts").should("be.visible");
  }
  affiliates() {
    return cy.get(".nav-item").contains("Affiliates").should("be.visible");
  }
  newsletterSubscribers() {
    return cy
      .get(".nav-item")
      .contains("Newsletter subscribers")
      .should("be.visible");
  }
  campaigns() {
    return cy.get(".nav-item").contains("Campaigns").should("be.visible");
  }
  contentManagement() {
    return cy
      .get(".nav-item")
      .contains("Content management")
      .should("be.visible");
  }
  topics() {
    return cy.get(".nav-item").contains("Topics (pages)").should("be.visible");
  }
  messageTemplates() {
    return cy
      .get(".nav-item")
      .contains("Message templates")
      .should("be.visible");
  }
  newsComments() {
    return cy.get(".nav-item").contains("News comments").should("be.visible");
  }
  blogPosts() {
    return cy.get(".nav-item").contains("Blog posts").should("be.visible");
  }
  blogComments() {
    return cy.get(".nav-item").contains("Blog comments").should("be.visible");
  }
  newsItems() {
    return cy.get(".nav-item").contains("News items").should("be.visible");
  }
  polls() {
    return cy.get(".nav-item").contains("Polls").should("be.visible");
  }
  forums() {
    return cy.get(".nav-item").contains("Forums").should("be.visible");
  }
  configuration() {
    return cy.get(".nav-item").contains("Configuration").should("be.visible");
  }
  settings() {
    return cy.get(".nav-item").contains("Settings").should("be.visible");
  }
  generalSettings() {
    return cy
      .get(".nav-item")
      .contains("General settings")
      .should("be.visible");
  }
  customerSettings() {
    return cy
      .get(".nav-item")
      .contains("Customer settings")
      .should("be.visible");
  }
  orderSettings() {
    return cy.get(".nav-item").contains("Order settings").should("be.visible");
  }
  shippingSettings() {
    return cy
      .get(".nav-item")
      .contains("Shipping settings")
      .should("be.visible");
  }
  taxSettings() {
    return cy.get(".nav-item").contains("Tax settings").should("be.visible");
  }
  catalogsettings() {
    return cy
      .get(".nav-item")
      .contains("Catalog settings")
      .should("be.visible");
  }
  shoppingCartSettings() {
    return cy
      .get(".nav-item")
      .contains("Shopping cart settings")
      .should("be.visible");
  }
  rewardPoints() {
    return cy.get(".nav-item").contains("Reward points").should("be.visible");
  }
  gdprSettings() {
    return cy.get(".nav-item").contains("GDPR settings").should("be.visible");
  }
  vendorSettings() {
    return cy.get(".nav-item").contains("Vendor settings").should("be.visible");
  }
  blogSettings() {
    return cy.get(".nav-item").contains("Blog settings").should("be.visible");
  }
  newsSettings() {
    return cy.get(".nav-item").contains("News settings").should("be.visible");
  }
  forumSettings() {
    return cy.get(".nav-item").contains("Forum settings").should("be.visible");
  }
  mediaSettings() {
    return cy.get(".nav-item").contains("Media settings").should("be.visible");
  }
  allSettings() {
    return cy
      .get(".nav-item")
      .contains("All settings (advanced)")
      .should("be.visible");
  }
  emailAccounts() {
    return cy.get(".nav-item").contains("Email accounts").should("be.visible");
  }
  stores() {
    return cy.get(".nav-item").contains("Stores").should("be.visible");
  }
  countries() {
    return cy.get(".nav-item").contains("Countries").should("be.visible");
  }
  languages() {
    return cy.get(".nav-item").contains("Languages").should("be.visible");
  }
  currencies() {
    return cy.get(".nav-item").contains("Currencies").should("be.visible");
  }
  paymentMethods() {
    return cy.get(".nav-item").contains("Payment methods").should("be.visible");
  }
  paymentRestrictions() {
    return cy
      .get(".nav-item")
      .contains("Payment restrictions")
      .should("be.visible");
  }
  taxProviders() {
    return cy.get(".nav-item").contains("Tax providers").should("be.visible");
  }
  taxCategories() {
    return cy.get(".nav-item").contains("Tax categories").should("be.visible");
  }
  shipping() {
    return cy
      .xpath("//li[@class='nav-item has-treeview']/a[contains(.,'Shipping')]")
      .should("be.visible");
  }
  shippingProviders() {
    return cy
      .get(".nav-item")
      .contains("Shipping providers")
      .should("be.visible");
  }
  warehouses() {
    return cy.get(".nav-item").contains("Warehouses").should("be.visible");
  }
  pickupPoints() {
    return cy.get(".nav-item").contains("Pickup points").should("be.visible");
  }
  datesAndRanges() {
    return cy
      .get(".nav-item")
      .contains("Dates and ranges")
      .should("be.visible");
  }
  measures() {
    return cy.get(".nav-item").contains("Measures").should("be.visible");
  }
  pos() {
    return cy.get(".nav-item").contains("POS").should("be.visible");
  }
  payPalZettle() {
    return cy.get(".nav-item").contains("PayPal Zettle").should("be.visible");
  }
  accessControlList() {
    return cy
      .get(".nav-item")
      .contains("Access control list")
      .should("be.visible");
  }
  widgets() {
    return cy.get(".nav-item").contains("Widgets").should("be.visible");
  }
  authentication() {
    return cy.get(".nav-item").contains("Authentication").should("be.visible");
  }
  externalAuthentication() {
    return cy
      .get(".nav-item")
      .contains("External authentication")
      .should("be.visible");
  }
  multiFactorAuthentication() {
    return cy
      .get(".nav-item")
      .contains("Multi-factor authentication")
      .should("be.visible");
  }
  webAPI() {
    return cy.get(".nav-item").contains("Web API").should("be.visible");
  }
  localPlugins() {
    return cy.get(".nav-item").contains("Local plugins").should("be.visible");
  }
  allPluginsAndThemes() {
    return cy
      .get(".nav-item")
      .contains("All plugins and themes")
      .should("be.visible");
  }
  system() {
    return cy.get(".nav-item").contains("System").should("be.visible");
  }
  systemInformation() {
    return cy
      .get(".nav-item")
      .contains("System information")
      .should("be.visible");
  }
  log() {
    return cy.get(".nav-item").contains("Log").should("be.visible");
  }
  warnings() {
    return cy.get(".nav-item").contains("Warnings").should("be.visible");
  }
  maintenance() {
    return cy.get(".nav-item").contains("Maintenance").should("be.visible");
  }
  messageQueue() {
    return cy.get(".nav-item").contains("Message queue").should("be.visible");
  }
  scheduleTasks() {
    return cy.get(".nav-item").contains("Schedule tasks").should("be.visible");
  }
  searchEngineNames() {
    return cy
      .get(".nav-item")
      .contains("Search engine friendly page names")
      .should("be.visible");
  }
  templates() {
    return cy.get(".nav-item").contains("Templates").should("be.visible");
  }
  reports() {
    return cy.get(".nav-item").contains("Reports").should("be.visible");
  }
  salesSummary() {
    return cy.get(".nav-item").contains("Sales summary").should("be.visible");
  }
  lowStock() {
    return cy.get(".nav-item").contains("Low stock").should("be.visible");
  }
  bestSellers() {
    return cy.get(".nav-item").contains("Bestsellers").should("be.visible");
  }
  productsNotPurchased() {
    return cy
      .get(".nav-item")
      .contains("Products never purchased")
      .should("be.visible");
  }
  countrySales() {
    return cy.get(".nav-item").contains("Country sales").should("be.visible");
  }
  customerReports() {
    return cy
      .get(".nav-item")
      .contains("Customer reports")
      .should("be.visible");
  }
  registeredCustomers() {
    return cy
      .get(".nav-item")
      .contains("Registered customers")
      .should("be.visible");
  }
  customersByOrderTotal() {
    return cy
      .get(".nav-item")
      .contains("Customers by order total")
      .should("be.visible");
  }
  customersByNumberOfOrders() {
    return cy
      .get(".nav-item")
      .contains("Customers by number of orders")
      .should("be.visible");
  }
  help() {
    return cy.get(".nav-item").contains("Help").should("be.visible");
  }
  training() {
    return cy.get(".nav-item").contains("Training").should("be.visible");
  }
  documentation() {
    return cy.get(".nav-item").contains("Documentation").should("be.visible");
  }
  communityForums() {
    return cy
      .get(".nav-item")
      .contains("Community forums")
      .should("be.visible");
  }
  premiumSupportServices() {
    return cy
      .get(".nav-item")
      .contains("Premium support services")
      .should("be.visible");
  }
  solutionPartners() {
    return cy
      .get(".nav-item")
      .contains("Solution partners")
      .should("be.visible");
  }
}
export default SideMenu;
