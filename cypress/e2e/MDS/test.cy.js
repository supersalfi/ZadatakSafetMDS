import loginPages from "../Helpers/accountHelper";
import strings from "../../fixtures/strings.js";

describe("tests for log in and create account functionalities", () => {
  let username, password;

  it("test log in of non existing account", () => {
    cy.visit("/login");
    loginPages.fillLogInForim("siadmin", "admin123");
    loginPages.inccoerectLogInError();
  });

  it("create admin accoun with username only", () => {
    cy.visit("/login");
    username = strings.username();
    loginPages.goToCreateAccountPage();
    loginPages.fillRegistrationForm({ username: username });
  });

  it("create admin accoun with password only", () => {
    cy.visit("/login");
    loginPages.goToCreateAccountPage();
    password = strings.password();
    loginPages.fillRegistrationForm({ password: password });
  });

  it("create admin accoun with username and password", () => {
    cy.visit("/login");
    loginPages.goToCreateAccountPage();
    username = strings.username();
    password = strings.password();
    loginPages.fillRegistrationForm({
      username: username,
      password: password,
    });
  });

  it("create admin with existing username",()=>{
    cy.visit("/login");
    loginPages.goToCreateAccountPage();
    loginPages.fillRegistrationForm({
        username: 'Admin',
        password: 'Admin',
      });
  })
});
