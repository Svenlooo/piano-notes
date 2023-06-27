import { NoteLetter } from "~/interfaces/NoteLetter";

interface OctaveMap {
  [key: number]: {
    case: "upper" | "lower";
    append: string;
  };
}

/**
 * Converts the note to the correct format, according to the passed Octave.
 * E.g.:
 * note = "C#", octave = 1 would return "C1#"
 * note = "C#", octave = 2 would return "C#"
 * note = "C#", octave = 3 would return "c#"
 * note = "C#", octave = 7 would return "c4#"
 * etc.
 * @param {NoteLetter} note
 * @param {number} octave
 * @returns
 */
export default function noteOctaveSpelling(note: NoteLetter, octave: number) {
  const octaveMap: OctaveMap = {
    0: { case: "upper", append: "2" },
    1: { case: "upper", append: "1" },
    2: { case: "upper", append: "" },
    3: { case: "lower", append: "" },
    4: { case: "lower", append: "1" },
    5: { case: "lower", append: "2" },
    6: { case: "lower", append: "3" },
    7: { case: "lower", append: "4" },
  };

  if (!octaveMap.hasOwnProperty(octave)) {
    return "Invalid octave";
  }

  let noteName = note.charAt(0);
  let noteAccidental = note.length > 1 ? note.charAt(1) : "";

  noteName =
    octaveMap[octave].case === "upper"
      ? noteName.toUpperCase()
      : noteName.toLowerCase();
  let spelling = noteName + octaveMap[octave].append + noteAccidental;

  return spelling;
}
