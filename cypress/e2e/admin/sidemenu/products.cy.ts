/// <reference types="Cypress" />

import Products from "../../../support/page-objects/admin/sidemenu/products.po";
import SideMenu from "../../../support/page-objects/admin/sidemenu/sidemenu.po";

describe("Visit Products", () => {
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
});
