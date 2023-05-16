/// <reference types="Cypress" />

describe("Loxodo API Test", () => {
  let userToken =
    "bearer J_Z0pe7DcxhbqbvbeChhfS2BtW6CTaUxdiJZY07ePEKdv2Qw4GtQ0_OrGz3b_zdtEAJ0XQVGelaTR1S9KmzDJ3w9lIAvnYx8joQoGL3c-JCnNQBVHGGii7d73Y5qbbLdY5pAWecxKQYTgi0UVDx1SWUoVQvcWWG7LRY2ozIu2dJU01GkJu8yj6lM0jjZ5zGgWm7YseRrAju_zb5Z4iRZEEHllE7IHAII17LkTypkekPCqZ-4-i682gmlf7vowwb2umgI0OZlZ5FvqsLI0bDnReL9yWd-UIj_WMxpNh2xVXme1UB_pSvBtU8GBgjVWINvn2zW9A";
  let adminToken =
    "Bearer oI-AKvTuQXgjvk4aYGPWe6Vgjel5Z8r3OjVWdzEI4qGKc_uMUgSvtWM9fxoOJ8YzMluUwCmJ8Y4cqRZ1hBBLwhLweLYzj0HU8Ch7f8GnzsI13zTtu7lrl_uvAZZ2JDDiZGYuG92zhQAtvN8um3WkpmqK1SHYi9wXzk3dyJoXUU9CrfHTZOthXBMhmVf7fLym47C5VUacp0-JVJjZu3mgaCe09_TgsBD8ntpwNEvl8VOlXls_hwbbvGMHNBl8G1zT_KWwf77VDkWWBDKNmFmTBcB60Uo";
  it("to validate get user", () => {
    cy.request({
      method: "GET",
      url: "https://loxodo.tech/api/users",
      headers: {
        Authorization: userToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      // check response body data
      expect(res.body.total_filtered).to.eq(47);
    });
  });
  it("to validate get user by id", () => {
    cy.request({
      method: "GET",
      url: "https://loxodo.tech/api/users/35",
      // pass data on the parameter
      qs: {
        tenant_id: "soundcore",
      },
      headers: {
        Authorization: adminToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      // check response body data
      expect(res.body.user.email).to.eq("t2@soundcore.com");
      expect(res.body.user.name).to.eq("mtestuser");
    });
  });
});
