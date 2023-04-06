class AdminLogin {
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com");
    cy.location("pathname").should("include", "login");
  }
  pageTitle() {
    return cy.get(".page-title").contains("Admin area demo");
  }
  email() {
    return cy.get(".inputs").contains("Email");
  }
  emailInput() {
    return cy.get("#Email").should("exist");
  }
  password() {
    return cy.get(".inputs").contains("Password");
  }
  passwordInput() {
    return cy.get("#Password").should("exist");
  }
  rememberMe() {
    return cy.get("#RememberMe").should("exist");
  }
  logInBtn() {
    return cy.get(".login-button").contains("Log in");
  }
  loginPageBottomText() {
    return cy.get(".topic-block-title").contains("Defaults for admin area");
  }
  emailValidMessage() {
    return cy.get("#Email-error").contains("Please enter your email");
  }
  validationMessage() {
    return cy.get(".message-error").should("exist");
  }
  validAdminLoginData() {
    cy.fixture("data").then((data) => {
      this.emailInput().clear().type(data.adminUser.email);
      this.passwordInput().clear().type(data.adminUser.password);
    });
  }
}
export default AdminLogin;
