/**
 * Retrieves the settings store from Localstorage.
 */
Cypress.Commands.add("getSettings", () => {
  cy.window().then((win) => {
    return JSON.parse(win.localStorage.getItem("settings"));
  });
});
