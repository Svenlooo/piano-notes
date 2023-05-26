import { defineStore } from 'pinia';
import Game from 'interfaces/Game';
import NoteListElement from '~/interfaces/NoteListElement';

export const useGamesStore = defineStore('games', () => {
    /**
     * The currently running game.
     */
    const currentGame = reactive<Game>({
        startDate: new Date(),
        score: 0,
        notes: [],
    })

    /**
     * Returns the last Note within the list of played notes.
     * @returns {NoteListElement} - the note which was played last
     */
    const lastNote = computed<NoteListElement>(() => {
        return currentGame.notes[currentGame.notes.length - 1];
    })

    /**
     * Update the last note within the currentGame.
     * @param {number} newAttempts - Amount of attempts to be added
     * @param {boolean} newPlayed - true: note has been played, false: note hasn't been played
     */
    const updateLastNote = (newAttempts: number, newPlayed: boolean) => {
        const updatedNote = {
          ...lastNote.value,
          attempts: newAttempts,
          played: newPlayed,
        };
      
        currentGame.notes[currentGame.notes.length - 1] = updatedNote;
    }

    /**
     * All games in chronological order.
     */
    const gameList = ref<Array<Game>>([])

    /**
     * Returns the latest game.
     * @returns {Game | boolean} - Last game or false if empty
     */
    const lastGame = computed<Game | boolean>(() => {
        return gameList.value[gameList.value.length - 1] !== undefined 
            && gameList.value[gameList.value.length - 1]
    })

    /**
     * Syncronizes the currentGame within the gameList.
     */
    const syncGameList = () => {
        // Add new game, if no last game is available OR if Date isn't the latest one
        if (!lastGame.value) {
            gameList.value.push(currentGame)
        } else if (lastGame.value.startDate !== currentGame.startDate) {
            gameList.value.push(currentGame)
        }
    }

    return { 
        currentGame,
        updateLastNote,
        lastNote,
        gameList,
        lastGame,
        syncGameList
    }
}, {
    persist: {
        paths: [ 'gameList' ],
    }
})
