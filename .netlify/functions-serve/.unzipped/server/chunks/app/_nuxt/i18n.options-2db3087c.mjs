import { i as isFunction$1, h as isObject$1, N as NUXT_I18N_PRERENDERED_PATH, j as formatMessage } from '../server.mjs';
import 'vue';
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
import 'vue/server-renderer';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'scule';
import 'klona';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/fs';
import '@intlify/bundle-utils';
import 'pathe';

async function i18n_options() {
  const loader = await import('./i18n.config-420b9343.mjs').then((m) => m.default || m);
  const config = isFunction$1(loader) ? await loader() : isObject$1(loader) ? loader : {};
  {
    let messages = null;
    try {
      let url = `${NUXT_I18N_PRERENDERED_PATH}/b0887214.js`;
      if (true) {
        url = `../../../../public${url}`;
      }
      messages = await import(
        /* @vite-ignore */
        url
        /* webpackChunkName: b0887214 */
      ).then(
        (m) => m.default || m
      );
    } catch (e) {
      console.error(formatMessage(e.message));
    }
    config.messages = messages || {};
    return config;
  }
}

export { i18n_options as default };
//# sourceMappingURL=i18n.options-2db3087c.mjs.map
