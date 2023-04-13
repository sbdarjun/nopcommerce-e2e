/// <reference types="Cypress" />

import { partialRight } from "cypress/types/lodash";
import Products from "../../../support/page-objects/admin/sidemenu/products.po";
import SideMenu from "../../../support/page-objects/admin/sidemenu/sidemenu.po";
import fake from "../../../fixtures/faker";

describe("Visit Products Page", () => {
  var products = new Products();
  var sideMenu = new SideMenu();

  beforeEach(() => {
    cy.login();
  });
  afterEach(() => {
    cy.logout();
  });
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
  });
  it("and Search Product with Invalid Product Name", () => {
    sideMenu.sideMenu();
    sideMenu.catalog().click();
    sideMenu.products().click();
    products.productTitle();
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
});
