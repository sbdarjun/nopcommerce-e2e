import AdminLogin from "./page-objects/admin/admin-login.po";
import HomePage from "./page-objects/admin/home-page.po";

Cypress.Commands.add("login", () => {
  const adminLogin = new AdminLogin();
  adminLogin.visit();
  adminLogin.validAdminLoginData();
});
Cypress.Commands.add("logout", () => {
  const adminLogout = new HomePage();
  adminLogout.adminLogout();
});
Cypress.Commands.add("deleteDownloads", () => {
  cy.exec("rm -rf cypress/downloads/*");
});
