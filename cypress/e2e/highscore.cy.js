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
        cy.wrap($item).click();
      });
    };

    playEachKey();
    playEachKey();

    cy.get('[data-cy="nav-highscore"]').click();
    cy.get('[data-cy="modalTrigger"]:first-of-type').click();
    cy.get('[data-cy="modalContent"]').should("be.visible");
    cy.get('[data-cy="modalContent"] [data-cy="bass-notes"]').click();
    cy.get('[data-cy="modalContent"] [data-cy="violin-notes"]').click();
    cy.get('[data-cy="modalContent"] [data-cy="modal-close"]').click();
    cy.get(
      '[data-cy="modalTrigger"]:first-of-type [data-cy="game-delete"]'
    ).click();
  });
});
