import { NoteLetter } from "~/interfaces/NoteLetter";
import { NoteScale } from "~/interfaces/NoteScale";

export default interface Note {
  /** Amount of attempts to play the note */
  attempts: number;

  clef: "violin" | "bass";

  note: NoteLetter;

  /** Note's octave, e.g. 3 */
  octave: number;

  /** True if note has been correctly played */
  played: boolean;

  /** Note's scale */
  scale: NoteScale;
}
