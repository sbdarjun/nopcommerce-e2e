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
}
export default Products;
