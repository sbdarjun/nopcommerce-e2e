import AdminLogin from "./page-objects/admin/admin-login.po";

Cypress.Commands.add("login", () => {
  const adminLogin = new AdminLogin();
  adminLogin.visit();
  adminLogin.validAdminLoginData();
});
