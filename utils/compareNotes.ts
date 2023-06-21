import NoteListElement from "~/interfaces/NoteListElement";
import Note from "~/interfaces/Note";

/**
 * Compares two notes
 * @param {NoteListElement | Note} note1
 * @param {NoteListElement | Note} note2
 * @returns {boolean}
 */
export default function compareNotes(
  note1: NoteListElement | Note,
  note2: NoteListElement | Note
): boolean {
  return (
    note1.clef === note2.clef &&
    note1.note === note2.note &&
    note1.scale === note2.scale &&
    note1.octave === note2.octave
  );
}
