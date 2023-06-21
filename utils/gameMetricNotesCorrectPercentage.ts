import NoteListElement from "~/interfaces/NoteListElement";
import { NoteLetter } from "~/interfaces/NoteLetter";

import ScoredNote from "~/interfaces/GameMetrics/ScoredNote";

/**
 * Calculates the percentage of correct plays for each note.
 * @param {Array<NoteListElement>} notes
 * @returns {Game}
 */
export default function gameMetricNotesCorrectPercentage(
  notes: Array<NoteListElement>
): Array<ScoredNote> | null {
  console.log("Notes: ", notes);
  let notesCorrectPercentage: ScoredNote = {

  };

  notes.map((current: NoteListElement) => {
    const fullNote: NoteLetter = current.note + current.scale;
    console.log('current', current)
  });

  console.log(notesCorrectPercentage);
  return null;
}
