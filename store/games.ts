import { defineStore } from "pinia";
import Game from "~/interfaces/Game";
import NoteListElement from "~/interfaces/NoteListElement";
import gameMetricNotesCorrectPercentage from "~/utils/gameMetricNotesCorrectPercentage";

export const useGamesStore = defineStore(
  "games",
  () => {
    /**
     * The currently running game.
     */
    const currentGame = reactive<Game>({
      startDate: new Date(),
      score: 0,
      notes: [],
      metrics: {
        notesCorrectPercentage: [],
      },
    });

    /**
     * Returns the last NoteListElement within the list of played notes.
     * @returns {NoteListElement} - the note which was played last
     */
    const currentNote = computed<NoteListElement>(() => {
      return currentGame.notes[currentGame.notes.length - 1];
    });

    /**
     * All games in reverse chronological order.
     */
    const gameList = ref<Array<Game>>([]);

    /**
     * Returns the latest game.
     * @returns {Game | boolean} - Last game or false if empty
     */
    const lastGame = computed<Game | boolean>(() => {
      return (
        gameList.value[gameList.value.length - 1] !== undefined &&
        gameList.value[gameList.value.length - 1]
      );
    });

    /**
     * Syncronizes the currentGame within the gameList.
     */
    const syncGameList = () => {
      // Add new game, if no last game is available OR if Date isn't the latest one
      if (
        typeof lastGame.value === "boolean" ||
        lastGame.value.startDate !== currentGame.startDate
      ) {
        gameList.value.push(currentGame);
      }
    };

    /**
     * Just returns the entire GameList.
     * @returns {Array<Game>} - The list
     */
    const getPastGames = () => {
      return gameList.value;
    };

    /**
     * Add one more attempt to the current note.
     */
    const addAttempt = () => {
      currentNote.value.attempts += 1;
    };

    /**
     * Set the "played" value of the current note.
     * @param {boolean} played - whether the note has been played
     */
    const setPlayed = (played: boolean) => {
      currentNote.value.played = played;
    };

    /**
     * Gets a specific game from the store by index.
     * @param {number} index
     * @returns {Game | boolean} - The Game or false
     */
    const getGame = (index: number) => {
      return gameList.value[index] !== undefined && gameList.value[index];
    };

    /**
     * Removes a game from the gameList.
     * @param index - The index of the game to be removed
     * @returns {boolean} - true: success, false: failure
     */
    const deleteGame = (index: number) => {
      const removedElement = gameList.value.splice(index, 1);
      return removedElement.length > 0;
    };

    /**
     * Calculates the amount of total attempts by the player, by counting the amount of attempts
     * within the note list.
     * @returns {number} - total amount of attempts
     */
    const currentGameTotalAttempts = computed<number>(() => {
      return currentGame.notes.reduce((prev, note) => prev + note.attempts, 0);
    });

    /**
     * Calculates the amount of successfully played notes, by iterating through all past notes
     * of the current game  and counting the "played" property being true.
     * @returns {number} - amount of correctly played notes
     */
    const currentGameSuccessfulAttempts = computed<number>(() => {
      return currentGame.notes.reduce(
        (prev, note) => prev + (note.played ? 1 : 0),
        0
      );
    });

    /**
     * Returns the amount of time the player has failed to play a note within the currently active game.
     * @returns {number} - total amount of failed tries
     */
    const currentGameFailedAttempts = computed<number>(() => {
      return Math.max(
        currentGameTotalAttempts.value - currentGameSuccessfulAttempts.value,
        0
      );
    });

    /**
     * Updates all the metrics of the current game.
     */
    const updateGameMetrics = () => {
      currentGame.metrics.notesCorrectPercentage =
        gameMetricNotesCorrectPercentage(
          currentNote.value,
          currentGame.metrics.notesCorrectPercentage
        );
    };

    /**
     * Watch for any player attempts to calculate the current game's score.
     */
    watch(
      () => currentGame.notes.map((note) => [note.attempts, note.played]),
      (lastPlay) => {
        let totalTries = 0;
        let totalSuccesses = 0;

        lastPlay.forEach((note) => {
          totalTries += typeof note[0] === "number" ? note[0] : 0;
          totalSuccesses += note[1] ? 1 : 0;
        });

        if (totalTries > 0)
          currentGame.score = Math.round((100 / totalTries) * totalSuccesses);
      }
    );

    return {
      currentGame,
      currentNote,
      gameList,
      getPastGames,
      syncGameList,
      addAttempt,
      setPlayed,
      lastGame,
      getGame,
      deleteGame,
      updateGameMetrics,
      currentGameSuccessfulAttempts,
      currentGameFailedAttempts,
    };
  },
  {
    persist: {
      paths: ["gameList"],
    },
  }
);
