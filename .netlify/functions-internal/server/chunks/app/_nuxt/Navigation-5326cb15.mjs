import { _ as __nuxt_component_0 } from './nuxt-link-ae137144.mjs';
import __nuxt_component_0$1 from './Icon-b0cc4d63.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigation" }, _attrs))}><ul class="navigation__list"><li class="navigation__list-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/highscore",
    class: "navigation__button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, { name: "game-icons:scroll-unfurled" }, null, _parent2, _scopeId));
        _push2(`<span class="label"${_scopeId}>Score</span>`);
      } else {
        return [
          createVNode(_component_Icon, { name: "game-icons:scroll-unfurled" }),
          createVNode("span", { class: "label" }, "Score")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navigation__list-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "navigation__button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, { name: "game-icons:grand-piano" }, null, _parent2, _scopeId));
        _push2(`<span class="label"${_scopeId}>Play</span>`);
      } else {
        return [
          createVNode(_component_Icon, { name: "game-icons:grand-piano" }),
          createVNode("span", { class: "label" }, "Play")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navigation__list-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/settings",
    class: "navigation__button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, { name: "ion:md-options" }, null, _parent2, _scopeId));
        _push2(`<span class="label"${_scopeId}>Settings</span>`);
      } else {
        return [
          createVNode(_component_Icon, { name: "ion:md-options" }),
          createVNode("span", { class: "label" }, "Settings")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Navigation-5326cb15.mjs.map
