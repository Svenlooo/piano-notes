import Note from 'interfaces/Note';

/**
 * Represents an entire game session.
 */
export default interface Game {
    /** The exact date + time when the game was started */
    date: Date,

    /** The score reached, represented in % */
    score: number,

    /** History of notes required from the player */
    notes: Array<{ 
        /** The note itself */
        note: Note,
        
        /** Whether the player managed to play the note */
        played: boolean,
        
        /** Amount of attempts to play the note correctly */
        attempts: number 
    }>
}
