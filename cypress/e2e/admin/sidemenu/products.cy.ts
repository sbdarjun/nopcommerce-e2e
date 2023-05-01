/// <reference types="Cypress" />

import Products from "../../../support/page-objects/admin/sidemenu/products.po";
import SideMenu from "../../../support/page-objects/admin/sidemenu/sidemenu.po";
import fake from "../../../fixtures/faker";

describe("Visit Products Page", () => {
  var products = new Products();
  var sideMenu = new SideMenu();

  beforeEach(() => {
    cy.login();
  });

  // afterEach(() => {
  //   cy.logout();
  // });
  it("and Validate Components", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click();
    sideMenu.products().click();
    products.productTitle();
    products.urlContent();
    products.addNewBtn();
    products.downloadCatalogAsPDFBtn();
    products.exportBtn();
    products.exportDropdown();
    products.importBtn();
    products.deleteBtn();
    products.searchBody();
    products.productTable();
    products.productTableHeader();
  });
  it("and Search Product with Invalid Product Name", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click();
    sideMenu.products().click();
    products.urlContent();
    products.productNameInput().type(fake.product());
    products.productCategoryInput();
    products.searchSubcategories().click();
    products.manufactureInput();
    products.vendorInput();
    products.warehouseInput();
    products.productType();
    products.publishedInput();
    products.productSKU().type(fake.product());
    products.goBtn();
    products.searchProductBtn().click();
    products.emptyProductMessage();
  });
  it("and Verify Product Items from the Table", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click();
    sideMenu.products().click();
    products.urlContent();
    products.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        products.tableHeader();
        products.tableColumnHeader(0).should("exist");
        products.tableColumnHeader(1).should("contain", "Picture");
        products.tableColumnHeader(2).should("contain", "Product name");
        products.tableColumnHeader(3).should("contain", "SKU");
        products.tableColumnHeader(4).should("contain", "Price");
        products.tableColumnHeader(5).should("contain", "Stock quantity");
        products.tableColumnHeader(6).should("contain", "Published");
        products.tableColumnHeader(7).should("contain", "Edit");
        products.productTablePagination();
        products.getProductsListOnConsole();
      } else {
        cy.log("Table is not found");
        products.emptyProductMessage();
      }
    });
  });
  it("and Verify Product Search Functionality", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click();
    sideMenu.products().click();
    products.urlContent();
    products.productTableHeader();
    products.selectRandomProductName();
    products.searchProductBtn().click();
    // products.getProductName();
  });
  it("and Verify add Product Functionality", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click();
    sideMenu.products().click();
    products.urlContent();
    cy.wait(1000);
    products.addNewBtn().click();
    products.addProductForm();
    products.addProductHeader();
    products.addProductURL();
    products.backToProductList();
    products.saveAndEditBtn();
    products.advancedBtn();
    products.settingsBtn();
    products.addProductNameInput().type(fake.product());
    products.shortDescriptionInput().type(fake.sentence());
    // products
    //   .fullDescriptionInput()
    //   .click({ force: true })
    //   .type(fake.paragraph());
    products.skuInput().type(fake.slug());
    products.saveBtn().click({ force: true });
    products.newProductAddMessage();
  });
  it.skip("and Verify Catalog Download as PDF functionality", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click({ force: true });
    sideMenu.products().click({ force: true });
    products.urlContent();
    products.downloadCatalogAsPDFBtn().click({ force: true });
    cy.wait(1000);
    cy.url().should("include", "/new-page");
    cy.get("#new-page-element").should("be.visible");
    cy.readFile("downloads/pdfcatalog.pdf").should("not.be.empty");
    after(() => {
      cy.task("deleteDownloads");
    });
  });
  it.only("and Edit Random Products", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click({ force: true });
    sideMenu.products().click({ force: true });
    products.urlContent();
    products.editButton();
    products.editProductTitle();
  });
});
