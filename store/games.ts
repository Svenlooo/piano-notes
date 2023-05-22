import { defineStore } from 'pinia'

export const gamesStore = defineStore('gamesStore', () => {
    
    /**
     * All games in chronological order.
     * Object structure:
     * {
     *  date: Date,
     *  notes: Array<currentGame>
     * }
     */
    const gameList = reactive([])

    /**
     * The currently running game.
     * [
     *      { note: string, correct: boolean }
     * ]
     */
    const currentGame = reactive([])


    return { currentGame }
})