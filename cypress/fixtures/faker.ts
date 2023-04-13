import { faker } from "@faker-js/faker";
const fake = {
  email: () => faker.internet.email(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  number: () => faker.datatype.number(),
  words: () => faker.random.words(3),
  url: () => faker.internet.url(),
  product: () => faker.commerce.product(),
};
export default fake;
