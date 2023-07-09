describe("Page Visit Test", () => {
  it("Visits the Highscore page", () => {
    cy.visit("/highscore");
  });

  it("Visits the Settings page", () => {
    cy.visit("/settings");
  });

  it("Visits the Index page", () => {
    cy.visit("/");
  });
});
