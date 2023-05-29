import { faker } from "@faker-js/faker";
const fake = {
  email: () => faker.internet.email(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  number: () => faker.datatype.number(),
  words: () => faker.random.words(3),
  url: () => faker.internet.url(),
  product: () => faker.commerce.product(),
  sentence: () => faker.lorem.sentence(),
  slug: () => faker.lorem.slug(),
  paragraph: () => faker.lorem.paragraph(),
  productName: () => faker.commerce.productName(),
  productDescription: () => faker.commerce.productDescription(),
  price: () => faker.commerce.price(),
  hexadecimal: () => faker.datatype.hexadecimal({ length: 10 }),
  password: () => faker.internet.password(),
};
export default fake;
