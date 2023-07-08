describe("Settings: Darkmode Toggle", () => {
  it("Toggles the DarkMode", () => {
    cy.visit("/settings");
    cy.get('[data-cy="settingsDarkMode"]').click();
    cy.get("html").should("have.attr", "data-theme", "dark");

    cy.getAllLocalStorage().then((result) => {
      const settings = JSON.parse(result[Cypress.config().baseUrl].settings);
      expect(settings.theme).to.equal("dark");
    });
  });
});

describe("Settings: Black Keys Toggle", () => {
  it("Toggles Black Keys", () => {
    cy.visit("/settings");
    cy.get('[data-cy="settingsblackKeysToggle"]').click();

    cy.getAllLocalStorage().then((result) => {
      const settings = JSON.parse(result[Cypress.config().baseUrl].settings);
      expect(settings.blackKeys).to.be.false;
    });
  });
});

describe("Settings: Success Only option", () => {
  it("Toggles Success option", () => {
    cy.visit("/settings");
    cy.get('[data-cy="settingsSuccessOnly"]').click();

    cy.getAllLocalStorage().then((result) => {
      const settings = JSON.parse(result[Cypress.config().baseUrl].settings);
      expect(settings.successOnly).to.be.true;
    });
  });
});
