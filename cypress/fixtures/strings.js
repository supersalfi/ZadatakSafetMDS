import { faker } from '@faker-js/faker';
const Strings = {
  address() {
    return " Cromwell Terrace Northeast, Washington, DC, USA";
  },

  randomNumber(minNumber, maxNumber) {
    return faker.random.number({ min: minNumber, max: maxNumber });
  },

  firstName() {
    return faker.name.firstName();
  },

  username(){
    return faker.internet.username();
  },

  password(){
    return faker.internet.password()
  },
  lastName() {
    return faker.name.lastName();
  },

  email() {
    return faker.internet.email();
  },

  phone() {
    return faker.phone.phoneNumber("212#######");
  },
  unit() {
    return faker.random.number({ min: 1, max: 10 });
  },
  
};

export default Strings;
