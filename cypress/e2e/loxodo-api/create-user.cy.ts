/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";

describe("Loxodo API test", () => {
  let userId;
  let adminToken =
    "Bearer oI-AKvTuQXgjvk4aYGPWe6Vgjel5Z8r3OjVWdzEI4qGKc_uMUgSvtWM9fxoOJ8YzMluUwCmJ8Y4cqRZ1hBBLwhLweLYzj0HU8Ch7f8GnzsI13zTtu7lrl_uvAZZ2JDDiZGYuG92zhQAtvN8um3WkpmqK1SHYi9wXzk3dyJoXUU9CrfHTZOthXBMhmVf7fLym47C5VUacp0-JVJjZu3mgaCe09_TgsBD8ntpwNEvl8VOlXls_hwbbvGMHNBl8G1zT_KWwf77VDkWWBDKNmFmTBcB60Uo";
  it("to validate create user", () => {
    cy.request({
      method: "POST",
      url: "https://loxodo.tech/api/users",
      headers: {
        Authorization: adminToken,
      },
      qs: {
        tenant_id: "soundcore",
      },
      body: {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        language_code: "ENG",
        profile_picture: "",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      // check the response data with the parameter data
      expect(res.status).to.equal(200);
      expect(res.body.user).has.property("name");
      expect(res.body.user).has.property("email");
      userId = res.body.user.user_id;
    });
  });
  it("to get created user by id", () => {
    cy.log("user id is: " + userId);
    // verify the created user by id
    cy.request({
      method: "GET",
      url: "https://loxodo.tech/api/users" + userId,
      headers: {
        Authorization: adminToken,
      },
      qs: {
        tenant_id: "soundcore",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      //   expect(res.body.user.user_id).to.equal(userId);
    });
  });
});
