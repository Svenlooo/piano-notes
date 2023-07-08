describe("Settings: Option Toggles", () => {
  beforeEach(() => {
    cy.visit("/settings");
  });

  it("Toggles the DarkMode", () => {
    cy.get('[data-cy="settingsDarkMode"]').click();
    cy.get("html").should("have.attr", "data-theme", "dark");

    cy.getSettings().then((settings) => {
      expect(settings.theme).to.equal("dark");
    });

    cy.get('[data-cy="settingsDarkMode"]').click();
    cy.get("html").should("have.attr", "data-theme", "light");

    cy.getSettings().then((settings) => {
      expect(settings.theme).to.equal("light");
    });
  });

  it("Toggles Black Keys", () => {
    cy.get('[data-cy="settingsblackKeysToggle"]').click();

    cy.getSettings().then((settings) => {
      expect(settings.blackKeys).to.be.false;
    });

    cy.get('[data-cy="settingsblackKeysToggle"]').click();

    cy.getSettings().then((settings) => {
      expect(settings.blackKeys).to.be.true;
    });
  });

  it("Toggles Success option", () => {
    cy.get('[data-cy="settingsSuccessOnly"]').click();

    cy.getSettings().then((settings) => {
      expect(settings.successOnly).to.be.true;
    });

    cy.get('[data-cy="settingsSuccessOnly"]').click();

    cy.getSettings().then((settings) => {
      expect(settings.successOnly).to.be.false;
    });
  });
});
