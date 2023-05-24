import NoteListElement from '~/interfaces/NoteListElement';

/**
 * Represents an entire game session.
 */
export default interface Game {
    /** The exact date + time when the game was started */
    startDate: Date,

    /** The score reached, represented in % */
    score: number,

    /** History of notes required from the player */
    notes: Array<NoteListElement>
}
