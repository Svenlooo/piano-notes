function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates random game data for testing.
 * @returns stuff
 */
export default function dataGenerator(entryCount: number = 100) {
  const clefs = ["bass", "violin"];
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const scales = ["", "#", "b"];
  const data = [];

  for (let i = 0; i < 100; i++) {
    // Change this to the number of entries you want to add
    const entry = {
      clef: clefs[getRandomInt(0, clefs.length - 1)],
      note: notes[getRandomInt(0, notes.length - 1)],
      octave: getRandomInt(1, 5),
      scale: scales[getRandomInt(0, scales.length - 1)],
      played: i < 9, // Change this condition based on when you want 'played' to be false
      attempts: getRandomInt(1, 10),
    };
    data.push(entry);
  }

  return data;
}
