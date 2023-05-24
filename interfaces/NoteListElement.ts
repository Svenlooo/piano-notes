import Note from 'interfaces/Note';

export default interface NoteListElement {
    /** The note itself */
    note: Note,

    /** Whether the player managed to play the note */
    played: boolean,
    
    /** Amount of attempts to play the note correctly */
    attempts: number
}