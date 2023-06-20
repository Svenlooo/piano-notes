import { NoteLetter } from "~/interfaces/NoteLetter";

export default interface GameMetric {

    /** Notes with most correct plays, e.g. 80 would mean 80% */
    mostCorrectNotes: {
        [key: NoteLetter]: number;
    }

    /**
     * c - win: 8, fail: 2
     * 
     * c - 80%
     */
}
