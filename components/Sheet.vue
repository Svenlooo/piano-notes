<template>
  <div class="sheet">
    <div class="sheet__wrapper">
      <span
        class="sheet__line sheet__line--extra"
        v-for="n in additionalLinesDirection == 'top'
          ? additionalLinesCount
          : 0"
        :key="n"
      ></span>
      <div class="sheet__line-wrapper">
        <Clef
          class="sheet__clef"
          :class="`sheet__clef--${clefType}`"
          :type="clefType"
        />
        <Note
          class="sheet__note"
          ref="note"
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
      <span
        class="sheet__line sheet__line--extra"
        v-for="n in additionalLinesDirection == 'bottom'
          ? additionalLinesCount
          : 0"
        :key="n"
      ></span>
    </div>
  </div>
</template>

<script setup>
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
    default: () => ["c", "d", "e", "f", "g", "a", "h"],
  },
  clefs: {
    type: Array,
    default: () => ["violin", "bass"],
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

const note = ref();
const clefType = ref("violin");
const notePosition = ref("c");
const noteOctave = ref(4);
const sheetStep = ref(10); // Percent for CSS top property
const c4TopValue = ref(90); // value for violin clef
const additionalLines = ref(0); // Amount of additional lines to add above or below the sheet
const pastNotes = reactive([]); // Store past notes ['c4', 'e5', 'c2']

const noteStylePosition = computed(() => {
  return getNoteCSSTopValue();
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
  console.log('additionalLines', additionalLines.value)
  return Math.abs(additionalLines.value);
});

/**
 * Returns the amount of new lines needed to be added to the sheet
 * @param sheet     - Sheet meta with min and max range
 * @param position  - The note's position (css "top" percent value)
 * @returns {number} - Amount of additional lines
 */
const getAdditionalLinesCount = (sheet, position) => {
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
 * Returns an object with the sheet's range
 * @returns {{ min: number, max: number }}
 */
const getSheetRange = () => {
  return { min: 70, max: -10 };
};

/**
 * Calculates the note's vertical positioning in % for the css top rule.
 * @returns {number} - CSS percent value for note's top rule.
 */
const getNoteCSSTopValue = () => {
  // Span of an entire octave in %
  const octavePercentDiff = sheetStep.value * props.octaveLength;

  // Note position on the octave
  const noteOctavePos = props.wholeNotes.indexOf(notePosition.value);

  // Offset from one-line octave (always positve, regardless of direction)
  const octaveOffset = Math.abs(noteOctave.value - props.oneLineOctave);

  // Position on the one-line octave
  const noteOneLineOctaveTopValue = c4TopValue.value - sheetStep.value * noteOctavePos;

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
 * @param {String} playedNote - e.g. 'c' or 'c#'
 */
const checkNote = (playedNote) => {
  if (playedNote == notePosition.value) {
    emit("correct");
    assignNewNote();
  } else {
    emit("incorrect");
    note.value.shake();
  }
};

/**
 * Takes the notes array to generate a random note.
 * Tries until it gets a note, which isn't already inside the pastNotes array.
 * @return {Array} [Clef, Note, Octave]
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

  if (pastNotes.includes(`${note}${octave}`)) {
    getNote();
  }

  return [clef, note, octave];
};

/**
 * Adds a note to the list of passed notes.
 * This avoids the same note being generated in a row.
 * @param {String} note - e.g. 'c'
 * @param {Number} octave - e.g. 4
 */
const addPastNote = (note, octave) => {
  pastNotes.unshift(`${note}${octave}`);
  pastNotes.value = pastNotes.slice(0, 3); // Limit array length to 3
};

/**
 * Sets a new note within the sheet.
 * Updates the view.
 */
const assignNewNote = () => {
  const note = getNote();
  console.log("Note:", note);
  clefType.value = note[0];
  notePosition.value = note[1];
  noteOctave.value = note[2];
  addPastNote(note[1], note[2]);
  setC4();

  const position = getNoteCSSTopValue();
  const sheet = getSheetRange();
  additionalLines.value = getAdditionalLinesCount(sheet, position);
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

onMounted(() => {
  assignNewNote();
});

defineExpose({
  checkNote,
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
      background-color: map-get($colors, "black");
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
        background-color: #000;
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

  &__note {
    position: absolute;
    left: 50%;
  }
}
</style>
