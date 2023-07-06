describe("Settings: Darkmode Toggle", () => {
  it("Toggles the DarkMode", () => {
    cy.visit("/settings");
    cy.get('[data-cy="settingsDarkMode"]').click();
    cy.get("html").should("have.attr", "data-theme", "dark");
  });
});

describe("Settings: Black Keys Toggle", () => {
  it("Toggles Black Keys", () => {
    cy.visit("/settings");
    cy.get('[data-cy="settingsblackKeysToggle"]').click();
  });
});

describe("Settings: Success Only option", () => {
  it("Toggles Success option", () => {
    cy.visit("/settings");
    cy.get('[data-cy="settingsSuccessOnly"]').click();
  });
});
