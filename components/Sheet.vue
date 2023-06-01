<template>
  <div class="sheet">
    <div class="sheet__wrapper">
      <template v-if="additionalLinesDirection == 'top'">
        <span
          class="sheet__line sheet__line--extra"
          v-for="n in additionalLinesCount"
          :key="n"
        ></span>
      </template>
      <div class="sheet__line-wrapper">
        <Clef
          class="sheet__clef"
          :class="`sheet__clef--${clefType}`"
          :type="clefType"
        />
        <Accidental
          class="sheet__accidental"
          :scale="scale"
          :style="`top: calc(${accidentalStylePosition}% - 8px)`"
        />
        <Note
          class="sheet__note"
          ref="noteComponent"
          :style="`top: ${noteStylePosition}%`"
          :position="notePosition"
          :octave="noteOctave"
        />
        <span class="sheet__line"></span>
        <span class="sheet__line"></span>
        <span class="sheet__line"></span>
        <span class="sheet__line"></span>
        <span class="sheet__line"></span>
      </div>
      <template v-if="additionalLinesDirection == 'bottom'">
        <span
          class="sheet__line sheet__line--extra"
          v-for="n in additionalLinesCount"
          :key="n"
        ></span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const games = useGamesStore();

/**
 * Default prop values are for the piano.
 * Just pass new values for other instruments.
 */
const props = defineProps({
  octaveLength: {
    type: Number,
    default: 7,
  },
  oneLineOctave: {
    type: Number,
    default: 4,
  },
  wholeNotes: {
    type: Array,
    default: () => ["C", "D", "E", "F", "G", "A", "B"],
  },
  clefs: {
    type: Array,
    default: () => ["violin", "bass"],
  },
  scales: {
    type: Array,
    default: () => ["", "#", "b"],
  },

  // Vertical range on the sheet.
  octaveRange: {
    type: Object,
    default: () => {
      return {
        violin: [4, 5],
        bass: [2, 3],
      };
    },
  },
});

const emit = defineEmits(["correct", "incorrect"]);

const noteComponent = ref(); // The Note component ref
const clefType = ref("violin"); // "violin" or "bass"
const scale = ref(""); // "", "#" or "b"
const notePosition = ref("C"); // The pure note
const noteOctave = ref(4);
const sheetStep = ref(10); // % for CSS top rule
const c4TopValue = ref(90); // % CSS top value for violin clef
const sheetRange = reactive({ min: 70, max: -10 }); // min and max range in % for CSS top rule
const additionalLines = ref(0); // Amount of additional lines to add above or below the sheet

const noteStylePosition = computed(() => {
  return getNoteCSSTopValue();
});

const accidentalStylePosition = computed(() => {
  return getNoteCSSTopValue(true);
});

/**
 * Determins how many lines to add above or below note.
 */
const additionalLinesDirection = computed(() => {
  if (additionalLines.value > 0) return "bottom";
  else if (additionalLines.value < 0) return "top";
  return "";
});

/**
 * Returns the amount of lines to add to the sheet.
 */
const additionalLinesCount = computed(() => {
  return Math.abs(additionalLines.value);
});

/**
 * Returns the amount of new lines needed to be added to the sheet
 * @param position  - The note's position (css "top" percent value)
 * @returns {number} - Amount of additional lines
 */
const getAdditionalLinesCount = (position) => {
  const sheet = sheetRange;
  if (position > sheet.min || position < sheet.max) {
    if (position > sheet.min) {
      return Math.floor((position - sheet.min) / sheetStep.value / 2);
    } else {
      return Math.ceil((position - sheet.max) / sheetStep.value / 2);
    }
  }
  return 0;
};

/**
 * Calculates the note's vertical positioning in % for the css top rule.
 * @param {boolean} - accidental
 * @returns {number} - CSS percent value for note's top rule.
 */
const getNoteCSSTopValue = (accidental = false) => {
  // Span of an entire octave in %
  const octavePercentDiff = sheetStep.value * props.octaveLength;

  // Note position on the octave
  const noteOctavePos = props.wholeNotes.indexOf(notePosition.value);

  // Offset from one-line octave (always positve, regardless of direction)
  const octaveOffset = Math.abs(noteOctave.value - props.oneLineOctave);

  // Position on the one-line octave
  const noteOneLineOctaveTopValue =
    c4TopValue.value - sheetStep.value * noteOctavePos;

  if (accidental) {
    // Map CSS top % values to each note within prop.wholeNotes
    // TODO: Find a way to make this more dynamic
    const notesCssTopValues = {
      violin: [20, 10, 0, -10, 50, 40, 30],
      bass: [40, 30, 20, 10, 0, -10, 50],
    };
    return notesCssTopValues[clefType.value][props.wholeNotes.indexOf(notePosition.value)];
  }

  // Note is below the one-line octave
  if (noteOctave.value > props.oneLineOctave) {
    return noteOneLineOctaveTopValue - octavePercentDiff * octaveOffset;

    // Note is above the one-line octave
  } else if (noteOctave.value < props.oneLineOctave) {
    return noteOneLineOctaveTopValue + octavePercentDiff * octaveOffset;

    // Note is in the one-line octave
  } else {
    return noteOneLineOctaveTopValue;
  }
};

/**
 * Checks a played note for correctness.
 * Emits events.
 * @param {String} playedNote - e.g. 'C', 'C#' or 'Cb'
 * @returns {boolean} - If pressed key was correct or incorrect
 */
const checkNote = (playedNote) => {
  const requiredNote = notePosition.value + scale.value;

  if (playedNote == requiredNote) {
    emit("correct");
    return true;
  } else {
    emit("incorrect");
    return false;
  }
};

/**
 * Takes the notes array to generate a random note.
 * Tries until it gets a note, which isn't already inside the pastNotes array.
 * @returns {Note}
 */
const getNote = () => {
  const clef = props.clefs[Math.floor(Math.random() * props.clefs.length)];
  const note =
    props.wholeNotes[Math.floor(Math.random() * props.wholeNotes.length)];
  const octave = Math.floor(
    Math.random() *
      (props.octaveRange[clef][1] - props.octaveRange[clef][0] + 1) +
      props.octaveRange[clef][0]
  );

  const scale =
    Math.random() < 0.66 // Choose no scale 66% of the time
      ? props.scales[0]
      : props.scales[Math.floor(Math.random() * (props.scales.length - 1)) + 1];

  // Get a new note, if the current one has been used in the past.
  /*if (games.currentGame.notes.includes(`${note}${octave}`)) {
    getNote();
  }*/

  return { clef: clef, note: note, octave: octave, scale: scale };
};

/**
 * Adds a note to the list of passed notes.
 * This avoids the same note being generated in a row.
 * @param {Note} note
 */
const addPastNote = (note) => {
  games.currentGame.notes.push({ ...note, played: false, attempts: 0 });
};

/**
 * Sets a new note within the sheet.
 * Updates the view.
 */
const assignNewNote = () => {
  const note = getNote();
  clefType.value = note.clef;
  notePosition.value = note.note;
  noteOctave.value = note.octave;
  scale.value = note.scale;
  addPastNote(note);
  setC4();
  setAdditionalLines();
};

/**
 * Adds additional lines above or below the sheet, if necessary.
 */
const setAdditionalLines = () => {
  additionalLines.value = getAdditionalLinesCount(noteStylePosition.value);
};

/**
 * Sets the top value for the note c4, depending on the Clef type.
 */
const setC4 = () => {
  if (clefType.value == "violin") {
    c4TopValue.value = 90;
  } else if (clefType.value == "bass") {
    c4TopValue.value = -30;
  }
};

/**
 * Triggers the Note's shake animation.
 */
const shakeNote = () => {
  noteComponent.value.shake();
}

onMounted(() => {
  // Only add a new note, if Sheet hasn't been mounted before.
  if (games.currentGame.notes.length == 0) {
    assignNewNote();
  } else {
    // Restore last game state on component re-mount
    clefType.value = games.currentNote.clef;
    notePosition.value = games.currentNote.note;
    noteOctave.value = games.currentNote.octave;
    scale.value = games.currentNote.scale;
    setC4();
    setAdditionalLines();
  }
});

defineExpose({
  checkNote,
  assignNewNote,
  shakeNote,
});
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 100%;
}

.sheet {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 100%;

  --line-distance: 20px;

  &__wrapper {
    position: relative;
    width: 100%;
    margin: 0 30px;
  }

  &__line {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: var(--line-distance);

    &:before {
      display: block;
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      top: 0;
      background-color: var(--color-black);
    }

    &-wrapper {
      position: relative;

      &:before,
      &:after {
        display: block;
        position: absolute;
        top: 0;
        height: calc(4 * var(--line-distance));
        content: "";
        background-color: var(--color-black);
      }
      &:before {
        width: 1px;
        right: 11px;
      }
      &:after {
        width: 7px;
        right: 0;
      }
    }

    &--extra {
      width: 60px;
      left: 47%;
    }
  }

  &__clef {
    position: absolute;
    left: 14px;

    &--violin {
      top: -24%;
    }
    &--bass {
      top: 0;
    }
  }

  &__accidental {
    position: absolute;
    left: 68px;
  }

  &__note {
    position: absolute;
    left: 50%;
  }
}
</style>
