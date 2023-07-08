describe("Settings: Option Toggles", () => {
  beforeEach(() => {
    cy.visit("/settings");
  });

  it("Toggles the DarkMode", () => {
    cy.get('[data-cy="settingsDarkMode"]').click();
    cy.get("html").should("have.attr", "data-theme", "dark");

    cy.window().then((win) => {
      const settings = JSON.parse(win.localStorage.getItem("settings"));
      expect(settings.theme).to.equal("dark");
    });
  });

  it("Toggles Black Keys", () => {
    cy.get('[data-cy="settingsblackKeysToggle"]').click();

    cy.window().then((win) => {
      const settings = JSON.parse(win.localStorage.getItem("settings"));
      expect(settings.blackKeys).to.be.false;
    });
  });

  it("Toggles Success option", () => {
    cy.get('[data-cy="settingsSuccessOnly"]').click();

    cy.window().then((win) => {
      const settings = JSON.parse(win.localStorage.getItem("settings"));
      expect(settings.successOnly).to.be.true;
    });
  });
});
