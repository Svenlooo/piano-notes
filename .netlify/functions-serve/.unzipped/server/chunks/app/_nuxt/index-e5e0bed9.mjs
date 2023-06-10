import { u as useGamesStore, _ as __nuxt_component_0$3 } from './games-5acf6785.mjs';
import { useSSRContext, computed, mergeProps, ref, reactive, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useServerSeoMeta, a as useSettingsStore } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import __nuxt_component_0$4 from './Icon-8345c495.mjs';
import { _ as __nuxt_component_3 } from './Navigation-72ef25cc.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'scule';
import 'klona';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import './config-d8d8a503.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './nuxt-link-ae137144.mjs';

const _sfc_main$7 = {
  __name: "StatusBar",
  __ssrInlineRender: true,
  setup(__props) {
    const games = useGamesStore();
    useSettingsStore();
    computed(() => games.currentGameSuccessfulAttempts);
    computed(() => games.currentGameFailedAttempts);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "statusBar" }, _attrs))} data-v-547e05ee>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatusBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-547e05ee"]]);
const _sfc_main$6 = {
  __name: "Clef",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "violin",
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clef" }, _attrs))} data-v-09583f02>`);
      if (__props.type == "violin") {
        _push(`<svg class="violin" viewBox="0 0 48 135" fill="none" data-v-09583f02><path d="M27.5497 74.4831C25.476 74.9084 23.5541 76.0463 21.7197 77.8589C19.8831 79.7048 18.8999 81.8102 18.7392 84.1395C18.6382 85.6036 19.0237 87.3019 19.8694 89.1323C20.7128 90.9959 22.0909 92.3949 23.9348 93.358C24.5594 93.5348 24.8367 93.8883 24.8045 94.3542C24.7931 94.5205 24.5481 94.6708 23.9718 94.7648C20.9892 93.79 18.5999 91.9869 16.8329 89.4243C15.0681 86.8284 14.2602 83.9642 14.414 80.7651C14.7505 77.3446 16.005 74.2215 18.1751 71.429C20.3808 68.6056 23.0939 66.6864 26.3144 65.6716L24.8279 53.6999C19.3971 57.6047 14.9221 61.7427 11.3651 66.178C7.81034 70.5801 5.79582 75.4897 5.28815 80.9044C5.18725 83.3381 5.52458 85.7352 6.30244 88.0624C7.078 90.4229 8.33663 92.5826 10.0737 94.6083C13.5836 98.6285 18.3515 100.93 24.3086 101.542C26.3525 101.549 28.546 101.333 30.9223 100.895L27.5497 74.4831ZM29.9744 74.3161L33.4124 100.264C38.6917 98.5555 41.5701 94.2405 42.0431 87.3857C41.9013 85.0689 41.3765 82.9598 40.3686 81.0514C39.3965 79.112 38.0298 77.5466 36.2353 76.3529C34.4408 75.1592 32.3761 74.4818 29.9744 74.3161ZM25.5241 39.2375C26.6708 38.6479 28.0187 37.5707 29.4988 36.0346C30.9767 34.5317 32.4418 32.7271 33.8563 30.6849C35.3064 28.6117 36.492 26.4869 37.4131 24.3103C38.3318 22.1671 38.8434 20.096 38.9765 18.166C39.0339 17.3341 39.0246 16.4976 38.9084 15.7541C38.8576 14.5469 38.5549 13.5899 37.9648 12.9139C37.3723 12.2712 36.5947 11.8832 35.594 11.8142C33.5927 11.6761 31.7064 12.783 29.9354 15.1349C28.5543 17.1794 27.3457 19.637 26.4144 22.4481C25.4475 25.2902 24.8164 28.1219 24.5499 31.0123C24.4894 34.3181 24.8371 37.0503 25.5241 39.2375ZM23.2895 41.0225C22.1604 35.5282 21.7053 29.9802 21.9242 24.3784C22.2056 20.7869 22.8044 17.4514 23.7207 14.3718C24.6037 11.2899 25.757 8.6613 27.1852 6.41947C28.5802 4.17532 30.1362 2.51067 31.8199 1.42322C33.3278 0.457368 34.4008 -0.0369715 34.9679 0.00215538C35.4015 0.0320752 35.757 0.223773 36.0699 0.546271C36.3828 0.868769 36.782 1.39782 37.2698 2.10016C40.8512 7.99765 42.3842 14.924 41.8378 22.8436C41.5783 26.6038 40.8254 30.2296 39.5721 33.8209C38.3545 37.3812 36.6814 40.7429 34.5574 43.8394C32.3977 46.967 29.9343 49.6389 27.1315 51.8862L28.9288 65.1833C30.4079 65.1181 31.4178 65.0541 31.9849 65.0932C34.52 65.2681 36.7515 65.9571 38.7795 67.1669C40.8075 68.3767 42.51 69.9318 43.8514 71.8633C45.1951 73.7614 46.1869 75.9028 46.8267 78.2873C47.4332 80.6696 47.6993 83.1286 47.5248 85.6576C47.2538 89.5841 45.9718 93.1065 43.681 96.1916C41.3902 99.2766 38.125 101.425 33.8498 102.668C34.0042 104.317 34.3081 106.712 34.7997 109.788C35.2556 112.896 35.5883 115.359 35.7979 117.179C36.0075 118.999 36.0215 120.739 35.9044 122.436C35.723 125.065 34.9286 127.35 33.5186 129.326C32.0754 131.299 30.2306 132.777 27.951 133.756C25.7048 134.738 23.2641 135.138 20.6623 134.958C16.993 134.705 13.862 133.453 11.2668 131.234C8.67391 128.982 7.39678 126.119 7.50673 122.583C7.71471 121.026 8.18266 119.587 8.94622 118.235C9.70979 116.884 10.6885 115.814 11.9157 115.03C13.1118 114.21 14.5115 113.838 16.0862 113.847C17.3871 113.936 18.596 114.387 19.7153 115.167C20.7989 115.977 21.6663 117.007 22.2819 118.286C22.864 119.563 23.1368 120.953 23.0358 122.417C22.9003 124.38 22.1184 125.998 20.69 127.27C19.2616 128.543 17.5122 129.124 15.4774 128.984L14.7102 128.931C15.8734 131.017 17.937 132.196 20.9058 132.401C22.4068 132.504 23.9642 132.277 25.5399 131.784C27.1513 131.26 28.5096 130.518 29.6838 129.529C30.8581 128.54 31.67 127.46 32.0529 126.282C32.7141 124.957 33.1118 123.079 33.2748 120.716C33.385 119.119 33.3284 117.51 33.1384 115.892C32.9461 114.308 32.6238 112.179 32.1691 109.54C31.7121 106.934 31.3829 104.905 31.2102 103.522C29.1743 103.883 27.0879 104.007 24.9197 103.857C21.2838 103.607 17.8986 102.637 14.7663 100.917C11.634 99.1961 8.94108 96.9374 6.65637 94.105C4.40501 91.2749 2.71033 88.1489 1.5769 84.6604C0.474526 81.2075 0.0174129 77.632 0.236614 73.9693C0.604232 70.5844 1.46301 67.3671 2.87508 64.3886C4.28945 61.3768 6.0259 58.5544 8.1155 55.957C10.2051 53.3596 12.3453 50.9997 14.5339 48.9106C16.7536 46.8571 19.6506 44.2151 23.2895 41.0225Z" fill="currentColor" data-v-09583f02></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type == "bass") {
        _push(`<svg class="bass" viewBox="0 0 54 61" fill="none" data-v-09583f02><path d="M1 58.3911C5.9794 55.0808 9.69818 52.5746 12.0934 50.8421C14.4884 49.1405 17.0097 47.0057 19.594 44.4687C22.1783 41.9319 24.3527 39.0545 26.1176 35.8678C27.5043 33.5164 28.7019 30.7939 29.6788 27.7001C30.6558 24.6371 31.16 21.6671 31.2545 18.8516C31.2545 16.2218 30.908 13.7158 30.183 11.3645C29.4897 8.98214 28.2922 7.03304 26.5903 5.45526C24.8886 3.90831 22.6825 3.13483 19.9407 3.13483C17.2933 3.13483 14.8037 3.66076 12.4716 4.68178C10.1709 5.73364 8.53212 7.40436 7.61819 9.75561C7.61819 9.97218 7.49213 10.2507 7.30304 10.6529C7.36607 11.148 7.61819 11.5191 8.09092 11.7977C8.56365 12.076 8.97335 12.1998 9.35153 12.1998C9.54061 12.1998 10.0764 12.107 10.8957 11.9214C11.7467 11.7357 12.44 11.6119 13.0073 11.6119C14.6775 11.6119 16.1589 12.1998 17.514 13.3446C18.8376 14.4893 19.4994 15.8814 19.4994 17.5212C19.4994 18.697 19.1527 19.8108 18.491 20.8316C17.8291 21.8527 16.9151 22.688 15.749 23.2758C14.583 23.8946 13.2909 24.1731 11.9043 24.1731C9.38304 24.1731 7.24 23.4305 5.47515 21.9145C3.74181 20.3675 2.85939 18.4184 2.85939 15.9744C2.85939 12.8495 3.83636 10.1579 5.75879 7.86847C7.71274 5.57888 10.1709 3.87733 13.1964 2.73253C16.1903 1.5569 19.2158 1 22.3043 1C25.6764 1 28.891 1.83544 31.8849 3.53699C34.9104 5.20771 37.2739 7.52813 39.0388 10.4053C40.8037 13.3136 41.7176 16.4075 41.7176 19.7488C41.7176 25.6891 39.7006 31.1962 35.6667 36.301C31.6327 41.4058 26.6534 45.8301 20.6969 49.6047C16.726 52.1725 10.297 55.6375 1.44121 60L1 58.3911V58.3911ZM44.7747 10.5291C44.7747 9.41527 45.1843 8.48719 46.0036 7.7447C46.7915 6.97123 47.7685 6.5999 48.9345 6.5999C49.9431 6.5999 50.8886 7.03304 51.7394 7.86847C52.5903 8.67278 53 9.63184 53 10.6838C53 11.7977 52.5589 12.7567 51.7394 13.5302C50.857 14.2727 49.88 14.644 48.777 14.644C47.611 14.644 46.6655 14.2727 45.9091 13.4374C45.1527 12.6329 44.7747 11.6739 44.7747 10.5291V10.5291ZM44.7747 26.7409C44.7747 25.6271 45.1843 24.668 45.9407 23.9255C46.7286 23.1521 47.7055 22.7808 48.9345 22.7808C49.9431 22.7808 50.857 23.1831 51.7394 24.0183C52.5589 24.8536 53 25.7509 53 26.7409C53 27.9475 52.5903 28.9067 51.8025 29.6801C50.9831 30.4535 50.0377 30.8558 48.9345 30.8558C47.7055 30.8558 46.7286 30.4535 45.9407 29.711C45.1843 28.9685 44.7747 27.9785 44.7747 26.7409V26.7409Z" fill="currentColor" data-v-09583f02></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clef.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-09583f02"]]);
const _sfc_main$5 = {
  __name: "Accidental",
  __ssrInlineRender: true,
  props: {
    scale: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "#", "b"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accidental" }, _attrs))} data-v-9a2b5844>`);
      if (__props.scale == "b") {
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:music-accidental-flat" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.scale == "#") {
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:music-accidental-sharp" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accidental.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9a2b5844"]]);
const _sfc_main$4 = {
  __name: "Note",
  __ssrInlineRender: true,
  props: {
    position: {
      type: String,
      default: "c"
    },
    octave: {
      type: Number,
      default: 4
    }
  },
  setup(__props, { expose: __expose }) {
    const svg = ref();
    const shake = () => {
      svg.value.classList.add("shake");
      setTimeout(() => {
        svg.value.classList.remove("shake");
      }, 500);
    };
    __expose({
      shake
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `note ${__props.position}${__props.octave}`
      }, _attrs))} data-v-c40a9cdd><svg class="note__svg" viewBox="0 0 33 19" fill="none" data-v-c40a9cdd><path d="M16.4867 0C7.37875 0 0 4.27343 0 9.51285C0 14.7523 7.37876 19 16.4867 19C25.5946 19 33 14.7523 33 9.51285C33 4.27342 25.5946 -1.64546e-05 16.4867 0ZM12.4584 1.7226C14.8268 1.69291 17.7446 2.58599 20.4883 4.37077C25.3659 7.5437 27.813 12.3222 25.9572 15.0149C24.1014 17.7075 18.6431 17.3137 13.7656 14.1407C8.888 10.9678 6.44088 6.18926 8.29669 3.49662C9.1086 2.31858 10.6163 1.74569 12.4584 1.7226Z" fill="currentColor" data-v-c40a9cdd></path></svg></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Note.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c40a9cdd"]]);
const _sfc_main$3 = {
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    octaveLength: {
      type: Number,
      default: 7
    },
    oneLineOctave: {
      type: Number,
      default: 4
    },
    wholeNotes: {
      type: Array,
      default: () => ["C", "D", "E", "F", "G", "A", "B"]
    },
    clefs: {
      type: Array,
      default: () => ["violin", "bass"]
    },
    scales: {
      type: Array,
      default: () => ["", "#", "b"]
    },
    // Vertical range on the sheet.
    octaveRange: {
      type: Object,
      default: () => {
        return {
          violin: [4, 5],
          bass: [2, 3]
        };
      }
    }
  },
  emits: ["correct", "incorrect"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const games = useGamesStore();
    const settings = useSettingsStore();
    const noteComponent = ref();
    const clefType = ref("violin");
    const scale = ref("");
    const notePosition = ref("C");
    const noteOctave = ref(4);
    const sheetStep = ref(10);
    const c4TopValue = ref(90);
    const sheetRange = reactive({ min: 70, max: -10 });
    const additionalLines = ref(0);
    const noteStylePosition = computed(() => {
      return getNoteCSSTopValue();
    });
    const accidentalStylePosition = computed(() => {
      return getNoteCSSTopValue(true);
    });
    const additionalLinesDirection = computed(() => {
      if (additionalLines.value > 0)
        return "bottom";
      else if (additionalLines.value < 0)
        return "top";
      return "";
    });
    const additionalLinesCount = computed(() => {
      return Math.abs(additionalLines.value);
    });
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
    const getNoteCSSTopValue = (accidental = false) => {
      const octavePercentDiff = sheetStep.value * props.octaveLength;
      const noteOctavePos = props.wholeNotes.indexOf(notePosition.value);
      const octaveOffset = Math.abs(noteOctave.value - props.oneLineOctave);
      const noteOneLineOctaveTopValue = c4TopValue.value - sheetStep.value * noteOctavePos;
      if (accidental) {
        const notesCssTopValues = {
          violin: [20, 10, 0, -10, 50, 40, 30],
          bass: [40, 30, 20, 10, 0, -10, 50]
        };
        return notesCssTopValues[clefType.value][props.wholeNotes.indexOf(notePosition.value)];
      }
      if (noteOctave.value > props.oneLineOctave) {
        return noteOneLineOctaveTopValue - octavePercentDiff * octaveOffset;
      }
      if (noteOctave.value < props.oneLineOctave) {
        return noteOneLineOctaveTopValue + octavePercentDiff * octaveOffset;
      }
      return noteOneLineOctaveTopValue;
    };
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
    const generateRandomNote = () => {
      const clef = props.clefs[Math.floor(Math.random() * props.clefs.length)];
      const note = props.wholeNotes[Math.floor(Math.random() * props.wholeNotes.length)];
      const octave = Math.floor(
        Math.random() * (props.octaveRange[clef][1] - props.octaveRange[clef][0] + 1) + props.octaveRange[clef][0]
      );
      let scale2 = props.scales[0];
      const accidentalProbability = 0.66;
      if (Math.random() > accidentalProbability && settings.blackKeys) {
        scale2 = props.scales[Math.floor(Math.random() * (props.scales.length - 1)) + 1];
      }
      const checkLastNEntries = 10;
      const newNote = { clef, note, octave, scale: scale2 };
      const pastNotes = games.currentGame.notes.slice(-checkLastNEntries);
      const noteAlreadyExists = pastNotes.some(
        (note2) => note2.clef === newNote.clef && note2.note === newNote.note && note2.octave === newNote.octave && note2.scale === newNote.scale
      );
      noteAlreadyExists && generateRandomNote();
      return newNote;
    };
    const addPastNote = (note) => {
      games.currentGame.notes.push({ ...note, played: false, attempts: 0 });
    };
    const assignNewNote = () => {
      const note = generateRandomNote();
      clefType.value = note.clef;
      notePosition.value = note.note;
      noteOctave.value = note.octave;
      scale.value = note.scale;
      addPastNote(note);
      setC4();
      setAdditionalLines();
    };
    const setAdditionalLines = () => {
      additionalLines.value = getAdditionalLinesCount(noteStylePosition.value);
    };
    const setC4 = () => {
      if (clefType.value == "violin") {
        c4TopValue.value = 90;
      } else if (clefType.value == "bass") {
        c4TopValue.value = -30;
      }
    };
    const shakeNote = () => {
      noteComponent.value.shake();
    };
    __expose({
      checkNote,
      assignNewNote,
      shakeNote
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Clef = __nuxt_component_0$1;
      const _component_Accidental = __nuxt_component_1$2;
      const _component_Note = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sheet" }, _attrs))}><div class="sheet__wrapper">`);
      if (unref(additionalLinesDirection) == "top") {
        _push(`<!--[-->`);
        ssrRenderList(unref(additionalLinesCount), (n) => {
          _push(`<span class="sheet__line sheet__line--extra"></span>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sheet__line-wrapper">`);
      _push(ssrRenderComponent(_component_Clef, {
        class: ["sheet__clef", `sheet__clef--${unref(clefType)}`],
        type: unref(clefType)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Accidental, {
        class: "sheet__accidental",
        scale: unref(scale),
        style: `top: calc(${unref(accidentalStylePosition)}% - 8px)`
      }, null, _parent));
      _push(ssrRenderComponent(_component_Note, {
        class: "sheet__note",
        ref_key: "noteComponent",
        ref: noteComponent,
        style: `top: ${unref(noteStylePosition)}%`,
        position: unref(notePosition),
        octave: unref(noteOctave)
      }, null, _parent));
      _push(`<span class="sheet__line"></span><span class="sheet__line"></span><span class="sheet__line"></span><span class="sheet__line"></span><span class="sheet__line"></span></div>`);
      if (unref(additionalLinesDirection) == "bottom") {
        _push(`<!--[-->`);
        ssrRenderList(unref(additionalLinesCount), (n) => {
          _push(`<span class="sheet__line sheet__line--extra"></span>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sheet.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Keyboard",
  __ssrInlineRender: true,
  emits: ["play"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "keyboard" }, _attrs))} data-v-bdb39d0d><div class="keyboard__octave" data-v-bdb39d0d><button class="keyboard__white-key" data-v-bdb39d0d></button><button class="keyboard__black-key keyboard__black-key--csharp" data-v-bdb39d0d></button><button class="keyboard__white-key" data-v-bdb39d0d></button><button class="keyboard__black-key keyboard__black-key--dsharp" data-v-bdb39d0d></button><button class="keyboard__white-key" data-v-bdb39d0d></button><button class="keyboard__white-key" data-v-bdb39d0d></button><button class="keyboard__black-key keyboard__black-key--fsharp" data-v-bdb39d0d></button><button class="keyboard__white-key" data-v-bdb39d0d></button><button class="keyboard__black-key keyboard__black-key--gsharp" data-v-bdb39d0d></button><button class="keyboard__white-key" data-v-bdb39d0d></button><button class="keyboard__black-key keyboard__black-key--asharp" data-v-bdb39d0d></button><button class="keyboard__white-key" data-v-bdb39d0d></button></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Keyboard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bdb39d0d"]]);
const _sfc_main$1 = {
  __name: "Piano",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useGamesStore();
    const sheet = ref();
    const handleNote = (noteList) => {
      const result = noteList.map((note) => sheet.value.checkNote(note));
      const isCorrect = result.some((value) => value === true);
      store.addAttempt();
      store.setPlayed(isCorrect);
      isCorrect ? sheet.value.assignNewNote() : sheet.value.shakeNote();
      store.syncGameList();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sheet = __nuxt_component_0;
      const _component_Keyboard = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "piano" }, _attrs))} data-v-1160a08f>`);
      _push(ssrRenderComponent(_component_Sheet, {
        ref_key: "sheet",
        ref: sheet
      }, null, _parent));
      _push(ssrRenderComponent(_component_Keyboard, {
        onPlay: ($event) => handleNote($event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Piano.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1160a08f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useServerSeoMeta({
      title: "Piano Notes",
      ogTitle: "Piano Notes",
      twitterTitle: "Piano Notes",
      description: "Learn how to read piano notes in a fun and simple way!",
      ogDescription: "Learn how to read piano notes in a fun and simple way!",
      twitterDescription: "Learn how to read piano notes in a fun and simple way!",
      ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
      twitterImage: "https://piano-notes.netlify.app/images/titleImage.jpg"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StatusBar = __nuxt_component_0$2;
      const _component_Piano = __nuxt_component_1;
      const _component_Navigation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0688094f>`);
      _push(ssrRenderComponent(_component_StatusBar, null, null, _parent));
      _push(`<main data-v-0688094f>`);
      _push(ssrRenderComponent(_component_Piano, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0688094f"]]);

export { index as default };
//# sourceMappingURL=index-e5e0bed9.mjs.map
