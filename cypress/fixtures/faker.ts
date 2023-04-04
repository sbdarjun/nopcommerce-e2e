import { faker } from "@faker-js/faker";
const fake = {
  email: () => faker.internet.email(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
};
export default fake;
