/**
 * Returns the day the game has been started.
 * @param {string} dateString - e.g. 2023-06-19T07:12:08.364Z
 * @return {string} - e.g. 19.06.2023
 */
function parseDay(dateString: string): string {
  const date: Date = new Date(dateString);
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const complete: string = new Intl.DateTimeFormat("de-DE", optionsDate).format(date);
  return complete;
}

/**
 * Returns the time the game has been started.
 * @param {string} dateString - e.g. 2023-06-19T07:12:08.364Z
 * @return {string} - e.g. 07:12
 */
function parseTime(dateString: string): string {
  const date: Date = new Date(dateString);
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const time: string = new Intl.DateTimeFormat("de-DE", optionsTime).format(date);
  return time;
}

export { parseDay, parseTime };
