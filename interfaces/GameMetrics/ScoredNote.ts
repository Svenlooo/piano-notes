import Note from "~/interfaces/Note";

export default interface ScoredNote extends Note {
  failedAttempts: number;
  successfulAttempts: number;
  score: number;
}
