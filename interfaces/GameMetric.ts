import ScoredNote from "~/interfaces/GameMetrics/ScoredNote";

export default interface GameMetric {
  /** Notes with most correct plays */
  notesCorrectPercentage: Array<ScoredNote>;
}
