import { c as createComponent, h as renderComponent, g as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BGGZ-78z.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from '../chunks/LandingLayout_BFoMYSzG.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-[60%_1fr] min-h-[500px] lg:h-186 w-full lg:w-[95vw] xl:w-[125%] mt-8 sm:mt-6 lg:mt-16 max-w-[80vw]"> ${renderComponent($$result2, "AuthContainer", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@components/auth/AuthContainer", "client:component-export": "AuthContainer" })} <div class="hidden lg:flex backdrop-blur-md bg-gray-100/5 border border-primary rounded-r-2xl p-6 lg:p-12 flex-col justify-evenly"> <div> <p class="text-base lg:text-lg text-center">
"Gracias a MyFondeo, mi pasión se convirtió en mi negocio.
          ¡Recomendado 100%!"
</p> <p class="text-base lg:text-lg font-bold text-right mt-[-6px]">Ricardo G.</p> </div> <!--  --> <div> <p class="text-base lg:text-lg text-center">
"La plataforma es intuitiva y el 80% de mis ganancias es mío. Súper
          transparente."
</p> <p class="text-base lg:text-lg font-bold text-right mt-[-6px]">Daniela C.</p> </div> <!--  --> <div> <p class="text-base lg:text-lg text-center">
"Pasé del 'apostar' al 'operar'. MyFondeo me dio la disciplina y el
          capital. ¡Imparable!"
</p> <p class="text-base lg:text-lg font-bold text-right mt-[-6px]">Andrés M.</p> </div> <!--  --> <div> <p class="text-base lg:text-lg text-center">
"La plataforma es de primer nivel. Fácil de usar y con resultados que
          hablan por sí mismos."
</p> <p class="text-base lg:text-lg font-bold text-right mt-[-6px]">Carlos V.</p> </div> </div> </div> ` })}`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/auth/index.astro", void 0);

const $$file = "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/auth/index.astro";
const $$url = "/auth";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
