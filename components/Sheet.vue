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

const clefType = ref("violin");
const notePosition = ref("c");
const noteOctave = ref(4);
const sheetStep = ref(10); // Percent for CSS top property
const c4TopValue = ref(90); // value for violin clef
const additionalLines = ref(0);
const pastNotes = reactive([]); // Store past notes ['c4', 'e5', 'c2']

/**
 * Calculates vertical positioning (in %) of the note within the sheet.
 */
const noteStylePosition = computed(() => {
  // return this.getNoteCssTopValue();
  return 0;
});

/**
 * Determins how many lines to add above or below note.
 */
const additionalLinesDirection = computed(() => {
  if (additionalLines > 0) return "bottom";
  else if (additionalLines < 0) return "top";
  return "";
});

const additionalLinesCount = computed(() => {
  return Math.abs(additionalLines);
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
      background-color: map-get($colors, 'black');
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
