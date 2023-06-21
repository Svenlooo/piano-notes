import NoteListElement from "~/interfaces/NoteListElement";
import { NoteLetter } from "~/interfaces/NoteLetter";

import ScoredNote from "~/interfaces/GameMetrics/ScoredNote";

/**
 *
 *
 * Each note:
 * [{
 *  clef
 *  note
 *  octave
 *  scale
 *  failedAttempts
 *  successfulAttempts
 *  score
 * }]
 *
 *
 * 1Check if last note is in scoreList.
 *    yes:
 *      Re-calculate failed and successful attempts
 *      Re-calculate score
 *    no:
 *      Add to scoreList
 *      Calculate failed and successful attempts
 *      Calculate score
 */

/**
 * Calculates the percentage of correct plays for each note.
 * @param {NoteListElement} lastlyPlayedNote - A single note with meta.
 * @param {Array<ScoredNote>} scoreList - The current list of ScoredNotes
 * @returns {Array<ScoredNote>}
 */
export default function gameMetricNotesCorrectPercentage(
  lastlyPlayedNote: NoteListElement,
  scoreList: Array<ScoredNote> = []
): Array<ScoredNote> {
  // Find index of last note
  const index: number = scoreList.findIndex(
    (scoreListEntry) =>
      scoreListEntry.clef == lastlyPlayedNote.clef &&
      scoreListEntry.note == lastlyPlayedNote.note &&
      scoreListEntry.scale == lastlyPlayedNote.scale &&
      scoreListEntry.octave == lastlyPlayedNote.octave
  );

  if (index > -1) {
    // Re-calculate existing note
    if (lastlyPlayedNote.played) {
      scoreList[index].successfulAttempts += 1;
    } else {
      scoreList[index].failedAttempts += 1;
    }
    scoreList[index].score = calculateScore(
      scoreList[index].failedAttempts,
      scoreList[index].successfulAttempts
    );
  } else {
    // Add new note
    const fails = lastlyPlayedNote.played
      ? (lastlyPlayedNote.attempts ?? 0) - 1
      : lastlyPlayedNote.attempts ?? 0;

    const successes = lastlyPlayedNote.played ? 1 : 0;

    const meta = {
      failedAttempts: fails,
      successfulAttempts: successes,
      score: calculateScore(fails, successes),
    };

    const lastNote: any = { ...lastlyPlayedNote };
    delete lastNote.attempts;
    delete lastNote.played;

    scoreList.push({ ...lastNote, ...meta });
  }

  return scoreList;
}

/**
 * Calculates the amount of successful attempts as a percentage value.
 * e.g. 8 successes and 2 fails returns 80
 * @param {number} fails
 * @param {number} successes
 * @returns {nmber}
 */
const calculateScore = (fails: number, successes: number): number => {
  if (fails === 0 && successes === 0) {
    return 0;
  }
  return Math.round((successes / (successes + fails)) * 100);
};
