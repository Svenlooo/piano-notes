import __nuxt_component_0$1 from './Icon-91f4fc29.mjs';
import { computed, withCtx, createVNode, unref, isRef, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useServerSeoMeta, a as useSettingsStore, b as useI18n } from '../server.mjs';
import { _ as __nuxt_component_3 } from './Navigation-cc039e68.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './config-d8d8a503.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/fs';
import '@intlify/bundle-utils';
import 'pathe';
import './nuxt-link-d23e8ff6.mjs';

const _sfc_main$3 = {
  __name: "Option",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: "settingsOption",
        for: props.id
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.icon
      }, null, _parent));
      _push(`<div class="settingsOption__label"><span class="settingsOption__label-inner">${ssrInterpolate(props.label)}</span></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/Option.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "LanguagePicker",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "switch" }, _attrs))}><select><option value="en">en</option><option value="de">de</option></select></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UIComponents/LanguagePicker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Toggle",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const updateValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "toggle" }, _attrs))}><input${ssrRenderAttr("id", props.id)} class="toggle__checkbox" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(updateValue)) ? ssrLooseContain(unref(updateValue), null) : unref(updateValue)) ? " checked" : ""}><label class="toggle__track"${ssrRenderAttr("for", props.id)}></label></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UIComponents/Toggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    useServerSeoMeta({
      title: "Piano Notes | Settings",
      ogTitle: "Piano Notes | Settings",
      twitterTitle: "Piano Notes | Settings",
      description: "Change your settings.",
      ogDescription: "Change your settings.",
      twitterDescription: "Change your settings.",
      ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
      twitterImage: "https://piano-notes.netlify.app/images/titleImage.jpg"
    });
    const settings2 = useSettingsStore();
    const isDarkMode = computed({
      get: () => settings2.theme === "dark" ? true : false,
      set: (value) => settings2.setTheme(value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SettingsOption = __nuxt_component_0;
      const _component_UIComponentsLanguagePicker = __nuxt_component_1;
      const _component_UIComponentsToggle = __nuxt_component_2;
      const _component_Navigation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f6ed1153><main data-v-f6ed1153><h1 data-v-f6ed1153>Settings</h1>`);
      _push(ssrRenderComponent(_component_SettingsOption, {
        label: "Language",
        icon: "bi:globe2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIComponentsLanguagePicker, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIComponentsLanguagePicker)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SettingsOption, {
        label: "Dark Mode",
        icon: "bi:yin-yang"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIComponentsToggle, {
              id: "darkmode",
              modelValue: unref(isDarkMode),
              "onUpdate:modelValue": ($event) => isRef(isDarkMode) ? isDarkMode.value = $event : null
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIComponentsToggle, {
                id: "darkmode",
                modelValue: unref(isDarkMode),
                "onUpdate:modelValue": ($event) => isRef(isDarkMode) ? isDarkMode.value = $event : null
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SettingsOption, {
        label: "Include black keys",
        icon: "game-icons:piano-keys"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIComponentsToggle, {
              id: "blackKeysToggle",
              modelValue: unref(settings2).blackKeys,
              "onUpdate:modelValue": ($event) => unref(settings2).blackKeys = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIComponentsToggle, {
                id: "blackKeysToggle",
                modelValue: unref(settings2).blackKeys,
                "onUpdate:modelValue": ($event) => unref(settings2).blackKeys = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SettingsOption, {
        label: "Show only successful plays",
        icon: "fluent:music-note-1-24-filled"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIComponentsToggle, {
              id: "successOnly",
              modelValue: unref(settings2).successOnly,
              "onUpdate:modelValue": ($event) => unref(settings2).successOnly = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIComponentsToggle, {
                id: "successOnly",
                modelValue: unref(settings2).successOnly,
                "onUpdate:modelValue": ($event) => unref(settings2).successOnly = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6ed1153"]]);

export { settings as default };
//# sourceMappingURL=settings-b9ea038c.mjs.map
