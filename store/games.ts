import { defineStore } from 'pinia';
import Game from 'interfaces/Game';

export const useGamesStore = defineStore('games', () => {
    
    /**
     * All games in chronological order.
     */
    const gameList: Array<Game> = reactive([])

    /**
     * The currently running game.
     */
    const currentGame: Game = reactive({
        date: new Date(),
        score: 0,
        notes: [],
    })

    return { currentGame }
})
