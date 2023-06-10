import { reactive, computed, ref, watch, defineComponent, createElementBlock } from 'vue';
import { d as defineStore } from '../server.mjs';

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useGamesStore = defineStore("games", () => {
  const currentGame = reactive({
    startDate: /* @__PURE__ */ new Date(),
    score: 0,
    notes: []
  });
  const currentNote = computed(() => {
    return currentGame.notes[currentGame.notes.length - 1];
  });
  const gameList = ref([]);
  const lastGame = computed(() => {
    return gameList.value[gameList.value.length - 1] !== void 0 && gameList.value[gameList.value.length - 1];
  });
  const syncGameList = () => {
    if (!lastGame.value) {
      gameList.value.push(currentGame);
    } else if (lastGame.value.startDate !== currentGame.startDate) {
      gameList.value.push(currentGame);
    }
  };
  const getPastGames = () => {
    return gameList.value;
  };
  const addAttempt = () => {
    currentNote.value.attempts += 1;
  };
  const setPlayed = (played) => {
    currentNote.value.played = played;
  };
  const deleteGame = (index) => {
    const removedElement = gameList.value.splice(index, 1);
    return removedElement.length > 0;
  };
  const currentGameTotalAttempts = computed(() => {
    return currentGame.notes.reduce((prev, note) => prev + note.attempts, 0);
  });
  const currentGameSuccessfulAttempts = computed(() => {
    return currentGame.notes.reduce(
      (prev, note) => prev + (note.played ? 1 : 0),
      0
    );
  });
  const currentGameFailedAttempts = computed(() => {
    return Math.max(currentGameTotalAttempts.value - currentGameSuccessfulAttempts.value, 0);
  });
  watch(
    () => currentGame.notes.map((note) => [note.attempts, note.played]),
    (lastPlay) => {
      let totalTries = 0;
      let totalSuccesses = 0;
      lastPlay.forEach((note) => {
        totalTries += typeof note[0] === "number" ? note[0] : 0;
        totalSuccesses += note[1] ? 1 : 0;
      });
      if (totalTries > 0)
        currentGame.score = Math.round(100 / totalTries * totalSuccesses);
    }
  );
  return {
    currentGame,
    currentNote,
    gameList,
    getPastGames,
    syncGameList,
    addAttempt,
    setPlayed,
    deleteGame,
    currentGameSuccessfulAttempts,
    currentGameFailedAttempts
  };
}, {
  persist: {
    paths: ["gameList"]
  }
});

export { __nuxt_component_0 as _, useGamesStore as u };
//# sourceMappingURL=games-5acf6785.mjs.map
