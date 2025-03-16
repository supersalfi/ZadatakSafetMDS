import { faker } from "@faker-js/faker";
const Strings = {
  address() {
    return " Cromwell Terrace Northeast, Washington, DC, USA";
  },

  randomNumber(minNumber, maxNumber) {
    return faker.random.number({ min: minNumber, max: maxNumber });
  },

  randomString(lenght) {
    return faker.string.alpha(lenght)
  },

  unit() {
    return faker.random.number({ min: 1, max: 10 });
  },
};

export default Strings;
