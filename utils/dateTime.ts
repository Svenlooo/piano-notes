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

/**
 * Converts an amount of seconds to a readable string for the user.
 * @param {number} seconds - amount of seconds
 * @returns {string} Hours:Minutes:Seconds + suffix
 */
function secondsToHMS(seconds: number): string {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  if (hours >= 1) {
      return `${hours}:${('0' + minutes).slice(-2)} hours`;
  } else if (minutes >= 1) {
      return `${minutes}:${('0' + remainingSeconds).slice(-2)} minutes`;
  } else {
      return `${remainingSeconds} seconds`;
  }
}


export { parseDay, parseTime, secondsToHMS };
