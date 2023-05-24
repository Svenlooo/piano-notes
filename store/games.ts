import { defineStore } from 'pinia';
import Game from 'interfaces/Game';
import NoteListElement from '~/interfaces/NoteListElement';

export const useGamesStore = defineStore('games', () => {
    /**
     * The currently running game.
     */
    const currentGame: Game = reactive({
        startDate: new Date(),
        score: 0,
        notes: [],
    })

    /**
     * Returns the last Note within the list of played notes.
     * @returns {NoteListElement} - the note which was played last
     */
    const lastNote: NoteListElement = computed(() => {
        return currentGame.notes[currentGame.notes.length - 1];
    })

    /**
     * All games in chronological order.
     */
    const gameList: Array<Game> = reactive([])

    /**
     * Syncronizes the currentGame within the gameList.
     */
    const syncGameList = () => {
        console.log('Sync');
    }

    return { currentGame, lastNote, gameList, syncGameList }
}, {
    persist: [
        {
            paths: [ 'gameList' ],
        }
    ],
})
