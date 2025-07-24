import { c as createComponent, d as createAstro, e as addAttribute, r as renderHead, f as renderSlot, g as renderTemplate, h as renderComponent, i as renderScript } from '../chunks/astro/server_BGGZ-78z.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  Astro2.url.pathname;
  const {
    description = "My fondeo es la aplicaci\xF3n de fondeo para apuestas deportivas #1.",
    title = "My Fondeo",
    tags = ["My fondeo", "fondeo", "apuesta deportiva"]
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><meta name="keywords"${addAttribute(tags.join(", "), "content")}><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"><link rel="icon" type="image/x-icon" href="/mf.svg"><title>${title ?? "My Fondeo"}</title>${renderHead()}</head> <body> <span class="fixed top-4 right-4 z-30 flex gap-2 text-sm"> <a href="/" class="bg-white text-secondary px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">ir al landing</a> <form method="POST" action="/logout" style="display:inline;"> <button type="submit" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors">cerrar sesión</button> </form> </span> <main class="p-4 sm:p-6 md:p-8 lg:p-10 pt-16 sm:pt-20 w-full max-w-7xl mx-auto z-2 flex flex-col items-center gap-16 sm:gap-24 md:gap-32 lg:gap-48 pb-0 flex-1 min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/layouts/DashboardLayout.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate`
Dashboard :)
` })} ${renderScript($$result, "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/app/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/app/index.astro", void 0);

const $$file = "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/app/index.astro";
const $$url = "/app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
