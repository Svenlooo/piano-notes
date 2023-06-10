import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import 'vue/server-renderer';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'ufo';
import 'defu';
import 'radix3';
import 'destr';
import 'scule';
import 'klona';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'ohash';
import 'unstorage';

const Toggle_vue_vue_type_style_index_0_lang = '@font-face{font-family:GreatVibes;font-weight:400;src:local("GreatVibes"),url(' + buildAssetsURL("GreatVibes-Regular.efeda7b9.woff2") + ') format("woff2"),url(' + buildAssetsURL("GreatVibes-Regular.39371d05.ttf") + ') format("truetype")}.toggle{--toggle-width:50px;--toggle-height:30px;--toggle-track-padding:2px;height:var(--toggle-height);position:relative;width:var(--toggle-width)}.toggle__checkbox{opacity:0;position:absolute}.toggle__track{background-color:var(--color-light2);border-radius:calc(var(--toggle-width)/2);display:block;height:inherit;padding:var(--toggle-track-padding);transition:all .2s;width:inherit}.toggle__track:after{aspect-ratio:1/1;background-color:var(--color-white);border-radius:50%;box-sizing:border-box;content:"";height:calc(100% - var(--toggle-track-padding)*2);position:absolute;transform:translateX(var(--toggle-track-padding));transition:all .2s;z-index:1}.toggle input:checked~.toggle__track{background-color:var(--color-green)}.toggle input:checked~.toggle__track:after{transform:translateX(calc(var(--toggle-width) - var(--toggle-height)))}';

const ToggleStyles_f6f39011 = [Toggle_vue_vue_type_style_index_0_lang];

export { ToggleStyles_f6f39011 as default };
//# sourceMappingURL=Toggle-styles.f6f39011.mjs.map
