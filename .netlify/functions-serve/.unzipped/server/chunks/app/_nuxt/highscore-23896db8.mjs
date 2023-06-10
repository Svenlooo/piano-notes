import { u as useGamesStore, _ as __nuxt_component_0$1 } from './games-5acf6785.mjs';
import { useSSRContext, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_3 } from './Navigation-bc3bc992.mjs';
import { u as useServerSeoMeta } from '../server.mjs';
import './nuxt-link-ae137144.mjs';
import 'ufo';
import './Icon-91f4fc29.mjs';
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

const _sfc_main$1 = {
  __name: "HighscoreList",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useGamesStore();
    computed(() => {
      const pastGames = store.getPastGames();
      return pastGames;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "highscoreList" }, _attrs))} data-v-02c4ff9d>`);
      _push(ssrRenderComponent(_component_ClientOnly, { fallback: "Loading highscore list..." }, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HighscoreList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-02c4ff9d"]]);
const _sfc_main = {
  __name: "highscore",
  __ssrInlineRender: true,
  setup(__props) {
    useServerSeoMeta({
      title: "Piano Notes | Past games",
      ogTitle: "Piano Notes | Past games",
      twitterTitle: "Piano Notes | Past games",
      description: "View your past games and see your rate of improvement.",
      ogDescription: "View your past games and see your rate of improvement.",
      twitterDescription: "View your past games and see your rate of improvement.",
      ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
      twitterImage: "https://piano-notes.netlify.app/images/titleImage.jpg"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HighscoreList = __nuxt_component_0;
      const _component_Navigation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-65a47f1f><main data-v-65a47f1f><h1 data-v-65a47f1f>Past Games</h1>`);
      _push(ssrRenderComponent(_component_HighscoreList, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/highscore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const highscore = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65a47f1f"]]);

export { highscore as default };
//# sourceMappingURL=highscore-23896db8.mjs.map
