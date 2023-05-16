/// <reference types="Cypress" />

describe("Loxodo API test", () => {
  let randomUserId;
  let adminToken =
    "Bearer oI-AKvTuQXgjvk4aYGPWe6Vgjel5Z8r3OjVWdzEI4qGKc_uMUgSvtWM9fxoOJ8YzMluUwCmJ8Y4cqRZ1hBBLwhLweLYzj0HU8Ch7f8GnzsI13zTtu7lrl_uvAZZ2JDDiZGYuG92zhQAtvN8um3WkpmqK1SHYi9wXzk3dyJoXUU9CrfHTZOthXBMhmVf7fLym47C5VUacp0-JVJjZu3mgaCe09_TgsBD8ntpwNEvl8VOlXls_hwbbvGMHNBl8G1zT_KWwf77VDkWWBDKNmFmTBcB60Uo";
  it("to select random user by id", () => {
    cy.request({
      method: "GET",
      url: "https://loxodo.tech/api/users",
      headers: {
        Authorization: adminToken,
      },
      qs: {
        tenant_id: "soundcore",
      },
    }).then((res) => {
      const userList = res.body.users;
      const randomUser = userList[Math.floor(Math.random() * userList.length)];
      randomUserId = randomUser.user_id;
      cy.log("selected user id is:" + randomUserId);
    });
  });
  it("to delete random user by id", () => {
    cy.log("deleted user id is: " + randomUserId);
    cy.request({
      method: "DELETE",
      url: "https://loxodo.tech/api/users/deactivate/" + randomUserId,
      headers: {
        Authorization: adminToken,
      },
      qs: {
        tenant_id: "soundcore",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.equal(200);
      expect(res.body).has.property("user_id");
      expect(res.body).has.property("locked");
      expect(res.body).has.property("message");
    });
  });
});
