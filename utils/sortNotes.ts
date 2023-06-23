import Note from "~/interfaces/Note";
import ScoredNote from "~/interfaces/GameMetrics/ScoredNote";

/**
 * Sorts a list of notes a) by octave and b) by letter in ascending order.
 * @param {Array<ScoredNote | Note>} notes - the unsorted list
 * @returns {Array<ScoredNote | Note>} - the sorted list
 */
export default function sortNotes(
  notes: Array<ScoredNote | Note>
): Array<ScoredNote | Note> {
  const noteOrder = ["C", "D", "E", "F", "G", "A", "B"];

  return notes.sort((a, b) => {
    // Sort by octave first
    if (a.octave < b.octave) {
      return -1;
    }
    if (a.octave > b.octave) {
      return 1;
    }

    // If octave is the same, sort by note
    if (noteOrder.indexOf(a.note) < noteOrder.indexOf(b.note)) {
      return -1;
    }
    if (noteOrder.indexOf(a.note) > noteOrder.indexOf(b.note)) {
      return 1;
    }

    // If both octave and note are the same, return 0
    return 0;
  });
}
