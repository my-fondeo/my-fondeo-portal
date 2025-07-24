import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_BGGZ-78z.mjs';
import 'clsx';
import 'cookie';
import './chunks/shared_DDkQUPVS.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/code/work/my-fondeo/my-fondeo-portal/","cacheDir":"file:///C:/code/work/my-fondeo/my-fondeo-portal/node_modules/.astro/","outDir":"file:///C:/code/work/my-fondeo/my-fondeo-portal/dist/","srcDir":"file:///C:/code/work/my-fondeo/my-fondeo-portal/src/","publicDir":"file:///C:/code/work/my-fondeo/my-fondeo-portal/public/","buildClientDir":"file:///C:/code/work/my-fondeo/my-fondeo-portal/dist/","buildServerDir":"file:///C:/code/work/my-fondeo/my-fondeo-portal/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"logout","links":[],"scripts":[],"styles":[],"routeData":{"route":"/logout","isIndex":false,"type":"endpoint","pattern":"^\\/logout\\/?$","segments":[[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/logout.ts","pathname":"/logout","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DTSQ9y7y.css"}],"routeData":{"route":"/app","isIndex":true,"type":"page","pattern":"^\\/app\\/?$","segments":[[{"content":"app","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/app/index.astro","pathname":"/app","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BLHe2IRh.css"},{"type":"external","src":"/_astro/index.DTSQ9y7y.css"},{"type":"external","src":"/_astro/AOSWrapper.B2ZarPwU.css"}],"routeData":{"route":"/auth","isIndex":true,"type":"page","pattern":"^\\/auth\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/index.astro","pathname":"/auth","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BLHe2IRh.css"},{"type":"external","src":"/_astro/index.DTSQ9y7y.css"},{"type":"external","src":"/_astro/AOSWrapper.B2ZarPwU.css"}],"routeData":{"route":"/challenges","isIndex":true,"type":"page","pattern":"^\\/challenges\\/?$","segments":[[{"content":"challenges","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/challenges/index.astro","pathname":"/challenges","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BLHe2IRh.css"},{"type":"external","src":"/_astro/index.DTSQ9y7y.css"},{"type":"external","src":"/_astro/index.BsCBwQrc.css"},{"type":"external","src":"/_astro/AOSWrapper.B2ZarPwU.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/code/work/my-fondeo/my-fondeo-portal/src/pages/app/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/code/work/my-fondeo/my-fondeo-portal/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/code/work/my-fondeo/my-fondeo-portal/src/pages/auth/index.astro",{"propagation":"none","containsHead":true}],["C:/code/work/my-fondeo/my-fondeo-portal/src/pages/challenges/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/app/index@_@astro":"pages/app.astro.mjs","\u0000@astro-page:src/pages/auth/index@_@astro":"pages/auth.astro.mjs","\u0000@astro-page:src/pages/challenges/index@_@astro":"pages/challenges.astro.mjs","\u0000@astro-page:src/pages/logout@_@ts":"pages/logout.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BTe1mjsc.mjs","C:/code/work/my-fondeo/my-fondeo-portal/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/check.svg":"chunks/check_CzDXpnhb.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/clock.svg":"chunks/clock_DgbEz651.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/discord.svg":"chunks/discord_Kn9dlCRk.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/division.svg":"chunks/division_wyiSHlI_.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/down_trade.svg":"chunks/down_trade_DlmD0Q5W.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/growing.svg":"chunks/growing_zIjvsOUo.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/instagram.svg":"chunks/instagram_BuPF9uaH.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/mf.svg":"chunks/mf_CBUqAMP5.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/min_vel.svg":"chunks/min_vel_DJvY8YBj.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/money.svg":"chunks/money_BMOIP1cU.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/people.svg":"chunks/people_CfzYMc-u.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/price_tag.svg":"chunks/price_tag_BJbiI9bb.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/rocket.svg":"chunks/rocket_Cq4bFa_J.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/target.svg":"chunks/target_1XvHDcqn.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/tiktok.svg":"chunks/tiktok_DXgvhxLN.mjs","C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/youtube.svg":"chunks/youtube_CtmHrWnX.mjs","C:\\code\\work\\my-fondeo\\my-fondeo-portal\\.astro\\content-assets.mjs":"chunks/content-assets_j5dzI4SO.mjs","\u0000astro:assets":"chunks/_astro_assets_2-tiNY7_.mjs","C:\\code\\work\\my-fondeo\\my-fondeo-portal\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BboDkhYS.mjs","@components/landing/UsersOpinionsCarrousel.tsx":"_astro/UsersOpinionsCarrousel.DMbDw1Aj.js","@components/auth/AuthContainer":"_astro/AuthContainer.C4i-Mz1l.js","@components/challenges/Challenges":"_astro/Challenges.q9P02aIu.js","@components/AOSWrapper.jsx":"_astro/AOSWrapper.B8XJJi-a.js","@astrojs/react/client.js":"_astro/client.yM2uiN9P.js","C:/code/work/my-fondeo/my-fondeo-portal/src/pages/app/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BT8NlIjo.js","C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/ui/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.WjQbBCn8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/code/work/my-fondeo/my-fondeo-portal/src/pages/app/index.astro?astro&type=script&index=0&lang.ts","window.location.hash&&history.replaceState(null,\"\",window.location.pathname+window.location.search);"],["C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/ui/Navbar.astro?astro&type=script&index=0&lang.ts","function a(){const e=document.getElementById(\"nav\");e&&(window.scrollY>100?e.classList.add(\"scrolled\"):e.classList.remove(\"scrolled\"))}function o(){const e=document.getElementById(\"mobile-menu-btn\"),t=document.getElementById(\"mobile-menu\");if(!e||!t){console.log(\"Mobile menu elements not found\");return}console.log(\"Mobile menu initialized\"),e.addEventListener(\"click\",l=>{l.preventDefault(),console.log(\"Mobile menu button clicked\");const n=t.classList.contains(\"translate-y-0\");if(console.log(\"Menu is open:\",n),n){t.classList.remove(\"translate-y-0\",\"opacity-100\"),t.classList.add(\"-translate-y-full\",\"opacity-0\");const s=e.querySelectorAll(\"span\");s[0].style.transform=\"rotate(0deg)\",s[0].style.transformOrigin=\"center\",s[1].style.opacity=\"1\",s[2].style.transform=\"rotate(0deg)\",s[2].style.transformOrigin=\"center\"}else{t.classList.remove(\"-translate-y-full\",\"opacity-0\"),t.classList.add(\"translate-y-0\",\"opacity-100\");const s=e.querySelectorAll(\"span\");s[0].style.transform=\"rotate(45deg) translate(5px, 5px)\",s[0].style.transformOrigin=\"center\",s[1].style.opacity=\"0\",s[2].style.transform=\"rotate(-45deg) translate(7px, -6px)\",s[2].style.transformOrigin=\"center\"}}),t.querySelectorAll(\".mobile-link\").forEach(l=>{l.addEventListener(\"click\",()=>{t.classList.remove(\"translate-y-0\",\"opacity-100\"),t.classList.add(\"-translate-y-full\",\"opacity-0\");const n=e.querySelectorAll(\"span\");n[0].style.transform=\"rotate(0deg)\",n[1].style.opacity=\"1\",n[2].style.transform=\"rotate(0deg)\"})}),document.addEventListener(\"click\",l=>{if(!t.contains(l.target)&&!e.contains(l.target)&&t.classList.contains(\"translate-y-0\")){t.classList.remove(\"translate-y-0\",\"opacity-100\"),t.classList.add(\"-translate-y-full\",\"opacity-0\");const n=e.querySelectorAll(\"span\");n[0].style.transform=\"rotate(0deg)\",n[1].style.opacity=\"1\",n[2].style.transform=\"rotate(0deg)\"}})}document.addEventListener(\"scroll\",a);o();document.addEventListener(\"DOMContentLoaded\",()=>{o()});document.addEventListener(\"astro:page-load\",()=>{o()});"]],"assets":["/_astro/doubting.Bhge_bPZ.png","/_astro/surprised-person.BSYD0Anc.png","/_astro/stressed-person.6VvBKhDo.png","/_astro/happy-person-phone.C6M6xEf5.png","/_astro/adviser.Mj27dHYf.png","/_astro/rocket.CwsJ5Onu.svg","/_astro/target.Dt2WCtYm.svg","/_astro/money.3ODHZ-Vt.svg","/_astro/people.CDlzlNaU.svg","/_astro/check.BekiKGoD.svg","/_astro/clock.RjYSOTgY.svg","/_astro/discord.Dn1w99MY.svg","/_astro/division.6iTVfzN-.svg","/_astro/down_trade.C7F61O1z.svg","/_astro/growing.CX2AnjOg.svg","/_astro/instagram.CFGYRNbz.svg","/_astro/mf.BIkoY0rY.svg","/_astro/min_vel.CVUQ_z8F.svg","/_astro/price_tag.C6gTdn94.svg","/_astro/tiktok.BRBwaPGj.svg","/_astro/youtube.WiwH3XDt.svg","/_astro/1.fG-n7sZq.png","/_astro/kyriepetrakis.7Eaa8hYG.png","/_astro/franciscoandrade.CRsR0MYU.png","/_astro/rufusstewart.dnERYJSt.png","/_astro/text-list-item-dark.CH3-ot4A.png","/_astro/text-list-item.B2htvC5P.png","/_astro/index.DTSQ9y7y.css","/_astro/index.BsCBwQrc.css","/_astro/index.BLHe2IRh.css","/favicon.ico","/mf.svg","/_astro/AOSWrapper.B2ZarPwU.css","/_astro/AOSWrapper.B8XJJi-a.js","/_astro/AuthContainer.C4i-Mz1l.js","/_astro/Challenges.q9P02aIu.js","/_astro/client.yM2uiN9P.js","/_astro/index.BH4JZYC6.css","/_astro/index.rC2e7R4K.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/UsersOpinionsCarrousel.DMbDw1Aj.js","/logout"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"3EtaIMpkzXbZn1H1gX/JMF8p8mKqTU19WFGLT/jWLZQ=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
