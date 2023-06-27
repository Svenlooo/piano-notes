import Note from "interfaces/Note";

export default interface NoteListElement extends Note {
  /** Whether the player managed to play the note */
  played: boolean;

  /** How often the player tried to play the note */
  attempts: number;
}
