import { defineStore } from 'pinia'

interface Note {
    clef: "violin" | "bass",
    note: string,
    octave: number,
}

interface Game {
    date: Date,
    score: number,
    notes: Array<{ note: Note, correct: boolean }>
}

export const gamesStore = defineStore('gamesStore', () => {
    
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
        notes: []
    })

    return { currentGame }
})
