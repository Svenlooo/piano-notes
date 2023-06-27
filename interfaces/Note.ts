import { NoteLetter } from "~/interfaces/NoteLetter";
import { NoteScale } from "~/interfaces/NoteScale";

export default interface Note {
  clef: "violin" | "bass";

  note: NoteLetter;

  /** Note's octave, e.g. 3 */
  octave: number;

  /** Note's scale */
  scale: NoteScale;
}
