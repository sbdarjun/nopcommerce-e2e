import { faker } from "@faker-js/faker";
const fake = {
  email: () => faker.internet.email(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  number: () => faker.datatype.number(),
  word: () => faker.random.word(),
};
export default fake;
