import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { u as useAppConfig } from './config-d8d8a503.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'klona';
import '../server.mjs';
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

function _optionalChain(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCSS",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    _optionalChain([appConfig, "optionalAccess", (_) => _.nuxtIcon, "optionalAccess", (_2) => _2.aliases]) || {};
    const iconName = computed(() => (_optionalChain([appConfig, "optionalAccess", (_3) => _3.nuxtIcon, "optionalAccess", (_4) => _4.aliases]) || {})[props.name] || props.name);
    const iconUrl = computed(() => `url('https://api.iconify.design/${iconName.value.replace(":", "/")}.svg')`);
    const sSize = computed(() => {
      if (!props.size && typeof _optionalChain([appConfig, "access", (_5) => _5.nuxtIcon, "optionalAccess", (_6) => _6.size]) === "boolean" && !_optionalChain([appConfig, "access", (_7) => _7.nuxtIcon, "optionalAccess", (_8) => _8.size])) {
        return void 0;
      }
      const size = props.size || _optionalChain([appConfig, "access", (_9) => _9.nuxtIcon, "optionalAccess", (_10) => _10.size]) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--5fa51ebc": iconUrl.value
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: sSize.value, height: sSize.value }
      }, _attrs, _cssVars))} data-v-5ee01813></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ee01813"]]);

export { IconCSS as default };
//# sourceMappingURL=IconCSS-0149edc0.mjs.map
