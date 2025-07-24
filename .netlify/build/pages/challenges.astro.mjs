import { c as createComponent, h as renderComponent, g as renderTemplate } from '../chunks/astro/server_BGGZ-78z.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from '../chunks/LandingLayout_BFoMYSzG.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Challenges", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@components/challenges/Challenges", "client:component-export": "Challenges" })} ` })}`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/challenges/index.astro", void 0);

const $$file = "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/challenges/index.astro";
const $$url = "/challenges";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
