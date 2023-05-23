import Note from 'interfaces/Note';

export default interface Game {
    date: Date,
    score: number,
    notes: Array<{ note: Note, correct: boolean }>
}
