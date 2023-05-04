/// <reference types="Cypress" />

import fake from "../../../../fixtures/faker";

class Products {
  urlContent() {
    cy.url().should("contain", "/Product/List");
  }
  productTitle() {
    return cy.get(".content-header").contains("Products").should("be.visible");
  }
  addNewBtn() {
    return cy
      .get("div.float-right > a.btn")
      .contains("Add new")
      .should("be.visible");
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
  productTableHeader() {
    return cy.get(".dataTables_scrollHeadInner").should("be.visible");
  }
  getProductsListOnConsole() {
    cy.get("table tr td:nth-child(3)").then(($inputData) => {
      const inputData = $inputData.text();
      cy.log("Product Name:", inputData);
    });
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
  selectRandomProductName() {
    let randomData;
    cy.get("table tbody tr td:nth-child(3)").then(($data) => {
      const randomIndex = Math.floor(Math.random() * $data.length); // generate a random index number
      randomData = $data.eq(randomIndex).text(); // store the text content of the randomly selected data in a variable
      cy.wrap(randomData);
      this.productNameInput().type(randomData);
    });
  }
  getProductName() {
    cy.get("table tbody tr").each(($row) => {
      cy.wrap($row)
        .find("td:nth-child(3)")
        .then(($column) => {
          const displayedData = $column.text();
          // expect(displayedData).to.equal(this.selectRandomProductName());
        });
    });
  }
  // add new product
  addProductForm() {
    return cy.get("#product-form").should("be.visible");
  }
  addProductHeader() {
    return cy.get(".content-header").contains("Add a new product");
  }
  backToProductList() {
    return cy.xpath('//*[@id="product-form"]/div[1]/h1/small').should("exist");
  }
  addProductURL() {
    cy.url().then((url) => {
      expect(url).to.include("Admin/Product/Create");
    });
  }
  saveBtn() {
    return cy.get(".btn-primary").contains("Save").should("be.visible");
  }
  saveAndEditBtn() {
    return cy
      .get(".btn-primary")
      .contains("Save and Continue Edit")
      .should("be.visible");
  }
  advancedBtn() {
    cy.get(".onoffswitch-label").then(($button) => {
      if ($button.find('[data-locale-basic="Basic"]:active').length > 0) {
        cy.wrap($button).click();
      } else {
        // do nothing
      }
    });
  }
  settingsBtn() {
    return cy
      .get("#product-editor-settings")
      .contains("Settings")
      .should("be.visible");
  }
  productInfoTitle() {
    return cy.get(".card-title").contains("Product info").should("be.visible");
  }
  addProductNameInput() {
    return cy.get(".input-group-required").should("be.visible");
  }
  shortDescriptionInput() {
    return cy.xpath('//*[@id="ShortDescription"]').should("be.visible");
  }
  fullDescriptionInput() {
    return cy.get("#FullDescription_ifr").should("be.visible");
  }
  skuInput() {
    return cy.xpath('//*[@id="Sku"]').should("be.visible");
  }
  categoriesInput() {
    cy.get(":nth-child(2) > .col-md-9 > .k-widget > .k-multiselect-wrap").then(
      ($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        const randomOption = $options[randomIndex];
        cy.wrap(randomOption).click();
      }
    );
  }
  newProductAddMessage() {
    return cy
      .get(".alert-success")
      .contains("The new product has been added successfully.")
      .should("be.visible");
  }
  editButton() {
    const buttons = cy.get(":nth-child(n) > .button-column > .btn");
    buttons.then(($buttons) => {
      const buttonCount = $buttons.length;
      const randomButtonIndex = Math.floor(Math.random() * buttonCount);
      cy.wrap($buttons[randomButtonIndex]).click();
    });
  }
  editProductTitle() {
    return cy
      .get(".float-left")
      .should("be.visible")
      .contains("Edit product details");
  }
  editProductName() {
    return cy.get("#Name").should("be.visible");
  }
  editShortDescription() {
    return cy.get("#ShortDescription").should("be.visible");
  }
  gtinInput() {
    cy.get("#Gtin")
      .invoke("is", ":visible")
      .then((isVisible) => {
        if (isVisible) {
          cy.get("#Gtin").clear().type(fake.hexadecimal());
        }
      });
  }
  expandButton() {
    cy.get(".fa-plus").then(($button) => {
      if ($button.is(":visible")) {
        $button.click();
      }
    });
  }
  addNewTierPriceBtn() {
    cy.get("#btnAddNewTierPrice")
      .invoke("is", ":visible")
      .then((isVisible) => {
        if (isVisible) {
          cy.get("#btnAddNewTierPrice")
            .contains("Add new tier price")
            .click({ force: true });
          cy.window().then((win) => {
            cy.wrap(win).invoke("focus");
            win.close();
          });
          // cy.get(".save").should("exist").contains("Save");
          cy.window().then((win) => {
            cy.wrap(win).invoke("focus");
          });
        }
      });
  }
  uploadFilesBtn() {
    const filepath = "image.png";
    cy.get('input[type="file"]').attachFile(filepath);
    cy.get(".upload-image-button").should("be.visible").click();
  }
  fileUploadSuccess() {
    return cy.get(".qq-upload-success").should("be.visible");
  }
  editDataSave() {
    return cy.get('[name="save"]').should("be.visible").click();
  }
  updateSuccessMessage() {
    return cy
      .get(".alert-success")
      .should("be.visible")
      .contains("The product has been updated successfully.");
  }
  selectRandomCheckBoxes() {
    cy.get(":nth-child(n) > :nth-child(1) > .checkboxGroups").then(
      ($checkboxes) => {
        const randomIndex = Math.floor(Math.random() * $checkboxes.length);
        cy.wrap($checkboxes[randomIndex]).check();
      }
    );
  }
  deleteConfirmation() {
    cy.get(".modal-dialog")
      .first()
      .within(() => {
        cy.contains("Are you sure?");
        cy.contains("Are you sure you want to perform this action?");
        cy.should("exist");
        cy.should("be.visible");
        cy.get("#delete-selected-action-confirmation-submit-button")
          .should("be.visible")
          .click();
      });
  }
}
export default Products;
