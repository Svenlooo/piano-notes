import { NoteLetter } from "~/interfaces/NoteLetter";

export default interface GameMetric {
  /** Notes with most correct plays, e.g. 80 would mean 80% */
  notesCorrectPercentage: {
    [K in NoteLetter]?: number;
  };
}
