/// <reference types="Cypress" />
class Products {
  urlContent() {
    cy.url().should("contain", "/Product/List");
  }
  productTitle() {
    return cy.get(".content-header").contains("Products").should("be.visible");
  }
  addNewBtn() {
    return cy.get(".btn-primary").contains("Add new").should("be.visible");
  }
  downloadCatalogAsPDFBtn() {
    return cy
      .get(".bg-purple")
      .contains("Download catalog as PDF")
      .should("be.visible");
  }
  exportBtn() {
    return cy.get(".btn-success").contains("Export").should("be.visible");
  }
  exportDropdown() {
    return cy.get(".dropdown-toggle").should("be.visible");
  }
  importBtn() {
    return cy.get(".bg-olive").contains("Import").should("be.visible");
  }
  deleteBtn() {
    return cy
      .get("#delete-selected")
      .contains("Delete (selected)")
      .should("be.visible");
  }
  searchBody() {
    return cy
      .get(".card-search > .card-body")
      .contains("Search")
      .should("be.visible");
  }
  productTable() {
    return cy.get("#products-grid_wrapper").should("be.visible");
  }
  productTableHearder() {
    return cy.get(".dataTables_scrollHeadInner").should("be.visible");
  }
  // search products
  productNameInput() {
    return cy.get("#SearchProductName").should("be.visible");
  }
  productCategoryInput() {
    cy.get("#SearchCategoryId").then(($categoryList) => {
      const categoryOptions = $categoryList.find("option");
      const randomIndex = Cypress._.random(1, categoryOptions.length - 1);
      const randomCategoryText =
        categoryOptions[randomIndex].textContent.trim();
      cy.get("#SearchCategoryId").select(randomIndex);
      cy.log("Selected Category:", randomCategoryText);
    });
  }
  searchSubcategories() {
    return cy.get("#SearchIncludeSubCategories").should("be.visible");
  }
  manufactureInput() {
    cy.get("#SearchManufacturerId").then(($manufacturerList) => {
      const manufacturerOptions = $manufacturerList.find("option");
      const randomIndex = Cypress._.random(1, manufacturerOptions.length - 1);
      const randomManufactureText =
        manufacturerOptions[randomIndex].textContent.trim();
      cy.get("#SearchManufacturerId").select(randomIndex);
      cy.log("Selected Manufacture:", randomManufactureText);
    });
  }
  vendorInput() {
    cy.get("#SearchVendorId").then(($vendorList) => {
      const vendorOptions = $vendorList.find("option");
      const randomIndex = Cypress._.random(1, vendorOptions.length - 1);
      const randomVendorText = vendorOptions[randomIndex].textContent.trim();
      cy.get("#SearchVendorId").select(randomIndex);
    });
  }
  warehouseInput() {
    cy.get("#SearchWarehouseId").then(($warehouseList) => {
      const warehouseOptions = $warehouseList.find("option");
      const randomIndex = Cypress._.random(1, warehouseOptions.length - 1);
      const randomWarehouseText =
        warehouseOptions[randomIndex].textContent.trim();
      cy.get("#SearchWarehouseId").select(randomIndex);
    });
  }
  productType() {
    cy.get("#SearchProductTypeId").then(($productTypeList) => {
      const productTypeOptions = $productTypeList.find("option");
      const randomIndex = Cypress._.random(1, productTypeOptions.length - 1);
      const randomproductTypeText =
        productTypeOptions[randomIndex].textContent.trim();
      cy.get("#SearchProductTypeId").select(randomIndex);
    });
  }
  publishedInput() {
    cy.get("#SearchPublishedId").then(($publishedInputList) => {
      const publishedInputOptions = $publishedInputList.find("option");
      const randomIndex = Cypress._.random(1, publishedInputOptions.length - 1);
      const randompublishedInputText =
        publishedInputOptions[randomIndex].textContent.trim();
      cy.get("#SearchPublishedId").select(randomIndex);
    });
  }
  productSKU() {
    return cy.get("#GoDirectlyToSku").should("be.visible");
  }
  goBtn() {
    return cy.get("#go-to-product-by-sku").contains("Go").should("be.visible");
  }
  searchProductBtn() {
    return cy.get("#search-products").contains("Search").should("be.visible");
  }
  emptyProductMessage() {
    return cy
      .get(".dataTables_empty")
      .contains("No data available in table")
      .should("be.visible");
  }
  // data table
  body() {
    return cy.get("body");
  }

  table() {
    return cy.get("table");
  }
  tableHeader() {
    return cy.get("table > thead > tr");
  }
  tableColumnHeader(columnNumber) {
    return this.tableHeader().find("th").eq(columnNumber);
  }
  productTablePagination() {
    return cy.get("#products-grid_length").should("exist");
  }
}
export default Products;
