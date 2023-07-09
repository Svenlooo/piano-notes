describe("Highscore Page tests", () => {
  /**
   * Tests if a game is playable and if it is being added to the
   * Highscore page.
   * Opens the game's modal
   * Checks the toggle between Bass and Violin notes
   * Closes the modal
   * Deletes the game.
   */
  it("Plays a game + opens modal", () => {
    cy.visit("/");

    const playEachKey = () => {
      cy.get('[data-cy="keyboard"] button').each(($item) => {
        cy.wrap($item).click({ force: true }); // Prevent error of element being covered by another.
      });
    };

    playEachKey();
    playEachKey();

    // Navigate to highscore page + open modal
    cy.get('[data-cy="nav-highscore"]').click();
    cy.get('[data-cy="modalTrigger"]:first-of-type').click();
    cy.get('[data-cy="modalContent"]').should("be.visible");

    // Toggle between bass and violin notes
    cy.get('[data-cy="modalContent"] [data-cy="bass-notes"]').click();
    cy.get('[data-cy="modalContent"] [data-cy="violin-notes"]').click();

    // Close modal + delete game
    cy.get('[data-cy="modalContent"] [data-cy="modal-close"]').click();
    cy.get(
      '[data-cy="modalTrigger"]:first-of-type [data-cy="game-delete"]'
    ).click();
  });
});
