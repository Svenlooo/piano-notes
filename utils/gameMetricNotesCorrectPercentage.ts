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
 * @returns {Game}
 */
export default function gameMetricNotesCorrectPercentage(
  lastlyPlayedNote: NoteListElement,
  scoreList: Array<ScoredNote> = []
): Array<ScoredNote> | null {
  console.log("last played note: ", lastlyPlayedNote);

  const index: number = scoreList.findIndex(
    (scoreListEntry) =>
      scoreListEntry.clef == lastlyPlayedNote.clef &&
      scoreListEntry.note == lastlyPlayedNote.note &&
      scoreListEntry.scale == lastlyPlayedNote.scale &&
      scoreListEntry.octave == lastlyPlayedNote.octave
  );

  if (index > -1) {
    // Re-calculate stuff
  } else {
    const meta = {
      failedAttempts: lastlyPlayedNote.played
        ? (lastlyPlayedNote.attempts ?? 0) - 1
        : lastlyPlayedNote.attempts ?? 0,
      successfulAttempts: lastlyPlayedNote.played ? 1 : 0,
      score: 0,
    };

    const lastNote: any = { ...lastlyPlayedNote };
    delete lastNote.attempts;
    delete lastNote.played;

    scoreList.push({ ...lastNote, ...meta });
  }

  console.log("ScoreList", scoreList);

  return scoreList;
}
