const accountHelper = {
  elements: {
    goToCreateAccountPage: ":nth-child(2) > a",
    usernameField: "#id_username",
    passwordField: "#id_password",
  },

  goToCreateAccountPage() {
    cy.get(this.elements.goToCreateAccountPage).click();
  },

  FillAccountCreationForm() {},

  fillLogInForim(username, password) {
    cy.get(this.elements.usernameField).type(username);
    cy.get(this.elements.passwordField).type(password);
    cy.get(".btn").contains("Sign In").click();
  },
  fillRegistrationForm({ username, password }) {
    if (username === "Admin") {
      cy.get(this.elements.usernameField).type(username);
      cy.get(this.elements.passwordField).type(password);
      cy.get(".btn").contains("Create & Sign In").click();
      cy.get(".card-header").contains("Server Error");
    } else {
      if (password === undefined) {
        cy.log(username);
        cy.get(this.elements.usernameField).type(username);
        cy.get(".btn").contains("Create & Sign In").click();
        cy.get(".toast-body").contains(
          new RegExp(`Logged in as ${username} with password \\w+`)
        );
        //(            'Logged in as '+ username + ' with password ')
      } else {
        if (username === undefined) {
          cy.get(this.elements.passwordField).type(password);
          cy.get(".btn").contains("Create & Sign In").click();
          cy.get(".toast-body").contains(
            new RegExp(`Logged in as user\\w+ with password ${password}`)
          );
        } else {
          cy.get(this.elements.usernameField).type(username);
          cy.get(this.elements.passwordField).type(password);
          cy.get(".btn").contains("Create & Sign In").click();
          cy.get(".toast-body").contains(
            "Logged in as " + username + " with password " + password
          );
        }
      }
    }
  },

  inccoerectLogInError() {
    cy.get(".alert").contains(
      "Please enter a correct username and password. Note that both fields may be case-sensitive."
    );
    cy.get(".toast-header").contains("Error");
    cy.get(".toast-body").contains(
      "Please enter a correct username and password. Note that both fields may be case-sensitive."
    );
  },
};

export default accountHelper;
