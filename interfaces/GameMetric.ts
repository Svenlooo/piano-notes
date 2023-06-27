import ScoredNote from "~/interfaces/GameMetrics/ScoredNote";

export default interface GameMetric {
  /** Game duration in seconds */
  durationInSeconds: number,

  /** Notes with most correct plays */
  notesCorrectPercentage: Array<ScoredNote>;
}
