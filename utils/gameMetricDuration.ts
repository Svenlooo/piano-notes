/**
 * Calculates the duration of the game.
 * The end date is defined as the last attempt to play a note.
 * @param {Date} startDate - the earlier date
 * @param {Date} endDate - the later date
 * @return {number} - seconds between the two dates
 */
export default function gameMetricDuration(startDate: Date, endDate: Date): number {
    const differenceInMs = endDate.getTime() - startDate.getTime();
    const seconds = Math.floor(differenceInMs / 1000);
    return seconds;
}
