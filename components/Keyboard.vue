<template>
  <div class="keyboard">
    <div class="keyboard__octave">
      <button v-on:click="playNote('c')" class="keyboard__white-key"></button>
      <button
        v-on:click="playNote('c#')"
        class="keyboard__black-key keyboard__black-key--csharp"
      ></button>
      <button v-on:click="playNote('d')" class="keyboard__white-key"></button>
      <button
        v-on:click="playNote('d#')"
        class="keyboard__black-key keyboard__black-key--dsharp"
      ></button>
      <button v-on:click="playNote('e')" class="keyboard__white-key"></button>
      <button v-on:click="playNote('f')" class="keyboard__white-key"></button>
      <button
        v-on:click="playNote('f#')"
        class="keyboard__black-key keyboard__black-key--fsharp"
      ></button>
      <button v-on:click="playNote('g')" class="keyboard__white-key"></button>
      <button
        v-on:click="playNote('g#')"
        class="keyboard__black-key keyboard__black-key--gsharp"
      ></button>
      <button v-on:click="playNote('a')" class="keyboard__white-key"></button>
      <button
        v-on:click="playNote('a#')"
        class="keyboard__black-key keyboard__black-key--asharp"
      ></button>
      <button v-on:click="playNote('h')" class="keyboard__white-key"></button>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['play'])

/**
 * Emits a note event, which other components can capture.
 * @param {String} note - e.g. 'c' or 'c#'
 */
const playNote = (note) => {
  emit('play', note);
};
</script>

<style lang="scss" scoped>
.keyboard {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;

  & button {
    user-select: none;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: var(--color-red);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }

  &__octave {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    padding-bottom: 3px;
  }

  &__white-key {
    width: calc(100% / 7);
    height: 100%;
    background-color: var(--color-piano-white-key);
    border: 0;
    padding: 0;
    margin: 0 percentage(math.div((math.div(375, 100) * 1.5), 1000));
    box-sizing: border-box;
    box-shadow: inset 1px -2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;

    &:active {
      background: linear-gradient(180deg, #fff 0%, #FBF7F5 100%);
    }
  }

  &__black-key {
    position: absolute;
    background-color: var(--color-piano-black-key);
    width: percentage(math.div((math.div(375, 100) * 24), 1000));
    height: percentage(math.div((math.div(337, 100) * 200), 1000));
    border: 0;
    padding: 0;
    z-index: 1;
    box-shadow: inset 1px -30px 1px rgba(255, 255, 255, 0.25);
    border-radius: 0px 0px 3px 3px;
    border: solid var(--color-black) 3px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;

    &:active {
        box-shadow: inset 1px -10px 1px rgba(255, 255, 255, 0.25);
    }

    &--csharp {
      left: percentage(math.div((math.div(100, 375) * 29), 100));
    }
    &--dsharp {
      left: percentage(math.div((math.div(100, 375) * 97), 100));
    }
    &--fsharp {
      left: percentage(math.div((math.div(100, 375) * 190), 100));
    }
    &--gsharp {
      left: percentage(math.div((math.div(100, 375) * 251), 100));
    }
    &--asharp {
      left: percentage(math.div((math.div(100, 375) * 313), 100));
    }
  }
}
</style>
