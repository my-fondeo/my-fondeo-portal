import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderTemplate, h as renderComponent, A as AstroError, U as UnknownContentCollectionError, j as RenderUndefinedEntryError, u as unescapeHTML, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent } from '../chunks/astro/server_BGGZ-78z.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$LandingLayout } from '../chunks/LandingLayout_BFoMYSzG.mjs';
import 'clsx';
/* empty css                                 */
import '../chunks/rocket_Cq4bFa_J.mjs';
import '../chunks/money_BMOIP1cU.mjs';
import '../chunks/target_1XvHDcqn.mjs';
import '../chunks/people_CfzYMc-u.mjs';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_NtFP2Rt2.mjs';
import * as devalue from 'devalue';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import * as React from 'react';
import { useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const stressedImage = new Proxy({"src":"/_astro/stressed-person.6VvBKhDo.png","width":682,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/img/stressed-person.png";
							}
							
							return target[name];
						}
					});

const doubting = new Proxy({"src":"/_astro/doubting.Bhge_bPZ.png","width":618,"height":780,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/img/doubting.png";
							}
							
							return target[name];
						}
					});

const surprisedPerson = new Proxy({"src":"/_astro/surprised-person.BSYD0Anc.png","width":618,"height":780,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/img/surprised-person.png";
							}
							
							return target[name];
						}
					});

const adviserImage = new Proxy({"src":"/_astro/adviser.Mj27dHYf.png","width":682,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/img/adviser.png";
							}
							
							return target[name];
						}
					});

const happyImage = new Proxy({"src":"/_astro/happy-person-phone.C6M6xEf5.png","width":618,"height":780,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/img/happy-person-phone.png";
							}
							
							return target[name];
						}
					});

const indicator = new Proxy({"src":"/_astro/text-list-item.B2htvC5P.png","width":150,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/text-list-item.png";
							}
							
							return target[name];
						}
					});

const indicatorDark = new Proxy({"src":"/_astro/text-list-item-dark.CH3-ot4A.png","width":150,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/work/my-fondeo/my-fondeo-portal/src/assets/icon/text-list-item-dark.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$TextListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextListItem;
  const { className = "", variant = "normal" } = Astro2.props;
  const width = variant == "normal" ? 40 : 32;
  const image = variant == "normal" ? indicator : indicatorDark;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(className, "class")} data-astro-cid-dwqxmdx2> <img${addAttribute(image.src, "src")} alt=""${addAttribute(width, "width")} class="flex-shrink-0 w-8 sm:w-10 lg:w-12 h-auto" data-astro-cid-dwqxmdx2> <span class="text-sm sm:text-base" data-astro-cid-dwqxmdx2> ${renderSlot($$result, $$slots["default"])} </span> </li> `;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/TextListItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$BenefitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BenefitCard;
  const { title, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-[140px] sm:max-w-[160px] lg:max-w-[175px]"> <div class="bg-white rounded-xl sm:rounded-2xl flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2"> <div class="rounded-2xl sm:rounded-3xl bg-secondary flex items-center justify-center p-1 sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px]" })} </div> <h4 class="text-xs sm:text-sm lg:text-md text-secondary font-bold">${title}</h4> </div> <div class="border-white border bg-secondary rounded-xl sm:rounded-2xl mt-[-8px] sm:mt-[-10px] text-primary-text text-center font-light px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/BenefitCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$StepCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StepCard;
  const { number, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl bg-secondary text-primary-text p-2 sm:p-3" data-aos="fade-down"${addAttribute(number * 100, "data-aos-delay")} data-aos-once="true"> <div class="flex gap-1.5 sm:gap-2 items-center"> <div class="rounded-2xl sm:rounded-4xl bg-white text-secondary px-2 sm:px-3 aspect-square flex items-center text-lg sm:text-xl lg:text-2xl font-bold min-w-[32px] sm:min-w-[36px] lg:min-w-[40px]"> ${number} </div> <span class="font-semibold text-sm sm:text-base lg:text-lg"> ${title} </span> </div> <div class="mt-1.5 sm:mt-2 font-extralight [&_strong]:font-bold px-0.5 sm:px-1 text-xs sm:text-sm lg:text-base"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/StepCard.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_BboDkhYS.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_API_URL": "http://ec2-44-211-247-200.compute-1.amazonaws.com", "PUBLIC_STAGE": "develop", "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_j5dzI4SO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_j5dzI4SO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_2-tiNY7_.mjs');
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const SvgStars = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 250, zoomAndPan: "magnify", viewBox: "0 0 187.5 32.249999", height: 43, preserveAspectRatio: "xMidYMid meet", ...props }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "298682c906" }, /* @__PURE__ */ React.createElement("path", { d: "M 2 0 L 185 0 L 185 31.515625 L 2 31.515625 Z M 2 0 " }))), /* @__PURE__ */ React.createElement("g", { id: "f5fb1ec7d6" }, /* @__PURE__ */ React.createElement("g", { clipRule: "nonzero", clipPath: "url(#298682c906)" }, /* @__PURE__ */ React.createElement("path", { style: {
  stroke: "none",
  fillRule: "nonzero",
  fill: "currentColor",
  fillOpacity: 1
}, d: "M 19.421875 0.832031 L 23.558594 9.246094 C 23.699219 9.574219 24.03125 9.8125 24.40625 9.859375 L 33.714844 11.222656 C 34.609375 11.363281 34.984375 12.492188 34.324219 13.101562 L 27.601562 19.636719 C 27.320312 19.871094 27.226562 20.25 27.273438 20.625 L 28.871094 29.886719 C 29.011719 30.78125 28.074219 31.484375 27.273438 31.0625 L 18.953125 26.6875 C 18.625 26.5 18.246094 26.5 17.917969 26.6875 L 9.597656 31.0625 C 8.796875 31.484375 7.855469 30.78125 8 29.886719 L 9.597656 20.625 C 9.644531 20.25 9.550781 19.917969 9.269531 19.636719 L 2.542969 13.101562 C 1.886719 12.445312 2.261719 11.363281 3.15625 11.222656 L 12.464844 9.859375 C 12.839844 9.8125 13.121094 9.574219 13.3125 9.246094 L 17.449219 0.832031 C 17.871094 0.03125 19.046875 0.03125 19.421875 0.832031 Z M 54.777344 0.832031 L 50.640625 9.246094 C 50.5 9.574219 50.171875 9.8125 49.792969 9.859375 L 40.484375 11.222656 C 39.589844 11.363281 39.214844 12.492188 39.875 13.101562 L 46.597656 19.636719 C 46.878906 19.871094 46.972656 20.25 46.925781 20.625 L 45.328125 29.886719 C 45.1875 30.78125 46.125 31.484375 46.925781 31.0625 L 55.246094 26.6875 C 55.578125 26.5 55.953125 26.5 56.28125 26.6875 L 64.601562 31.0625 C 65.402344 31.484375 66.390625 30.78125 66.203125 29.886719 L 64.601562 20.625 C 64.554688 20.25 64.648438 19.917969 64.933594 19.636719 L 71.65625 13.101562 C 72.3125 12.445312 71.9375 11.363281 71.042969 11.222656 L 61.734375 9.859375 C 61.359375 9.8125 61.078125 9.574219 60.890625 9.246094 L 56.75 0.832031 C 56.375 0.03125 55.199219 0.03125 54.777344 0.832031 Z M 92.152344 0.832031 L 88.015625 9.246094 C 87.875 9.574219 87.546875 9.8125 87.171875 9.859375 L 77.859375 11.222656 C 76.96875 11.363281 76.59375 12.492188 77.25 13.101562 L 83.972656 19.636719 C 84.253906 19.871094 84.347656 20.25 84.300781 20.625 L 82.703125 29.886719 C 82.5625 30.78125 83.503906 31.484375 84.300781 31.0625 L 92.625 26.6875 C 92.953125 26.5 93.328125 26.5 93.65625 26.6875 L 101.980469 31.0625 C 102.777344 31.484375 103.765625 30.78125 103.578125 29.886719 L 101.980469 20.625 C 101.933594 20.25 102.027344 19.917969 102.308594 19.636719 L 109.03125 13.101562 C 109.691406 12.445312 109.3125 11.363281 108.421875 11.222656 L 99.113281 9.859375 C 98.734375 9.8125 98.453125 9.574219 98.265625 9.246094 L 94.128906 0.832031 C 93.707031 0.03125 92.53125 0.03125 92.152344 0.832031 Z M 129.484375 0.832031 L 125.34375 9.246094 C 125.203125 9.574219 124.875 9.8125 124.5 9.859375 L 115.191406 11.222656 C 114.296875 11.363281 113.921875 12.492188 114.578125 13.101562 L 121.300781 19.636719 C 121.585938 19.871094 121.679688 20.25 121.632812 20.625 L 120.03125 29.886719 C 119.890625 30.78125 120.832031 31.484375 121.632812 31.0625 L 129.953125 26.6875 C 130.28125 26.5 130.660156 26.5 130.988281 26.6875 L 139.308594 31.0625 C 140.109375 31.484375 141.09375 30.78125 140.90625 29.886719 L 139.308594 20.625 C 139.261719 20.25 139.355469 19.917969 139.636719 19.636719 L 146.359375 13.101562 C 147.019531 12.445312 146.644531 11.363281 145.75 11.222656 L 136.441406 9.859375 C 136.066406 9.8125 135.78125 9.574219 135.59375 9.246094 L 131.457031 0.832031 C 131.082031 0.03125 129.90625 0.03125 129.484375 0.832031 Z M 166.859375 0.832031 L 162.722656 9.246094 C 162.582031 9.574219 162.25 9.8125 161.875 9.859375 L 152.566406 11.222656 C 151.671875 11.363281 151.296875 12.492188 151.957031 13.101562 L 158.679688 19.636719 C 158.960938 19.871094 159.054688 20.25 159.007812 20.625 L 157.410156 29.886719 C 157.269531 30.78125 158.207031 31.484375 159.007812 31.0625 L 167.328125 26.6875 C 167.660156 26.5 168.035156 26.5 168.363281 26.6875 L 176.683594 31.0625 C 177.484375 31.484375 178.472656 30.78125 178.285156 29.886719 L 176.683594 20.625 C 176.636719 20.25 176.730469 19.917969 177.015625 19.636719 L 183.738281 13.101562 C 184.394531 12.445312 184.019531 11.363281 183.125 11.222656 L 173.816406 9.859375 C 173.441406 9.8125 173.160156 9.574219 172.972656 9.246094 L 168.832031 0.832031 C 168.410156 0.03125 167.234375 0.03125 166.859375 0.832031 Z M 166.859375 0.832031 " }))));

const UsersOpinionsCarrousel = ({ items, firstIndex = 0 }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!swiperRef.current) return;
  }, [swiperRef]);
  const onNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };
  const onPrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay],
        onSwiper: (swiper) => swiperRef.current = swiper,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        },
        initialSlide: firstIndex,
        centeredSlides: true,
        loop: true,
        allowSlideNext: true,
        allowSlidePrev: true,
        allowTouchMove: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        className: "max-w-[90%] relative",
        children: items.map((item, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(Slide, { item, i }) }, i))
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-xl sm:text-2xl lg:text-3xl absolute w-8 sm:w-9 lg:w-10 left-0 translate-x-[-50%] sm:translate-x-[-75%] top-[50%] z-20 bg-white text-align rounded-2xl sm:rounded-4xl text-primary cursor-pointer aspect-square hidden sm:flex items-center justify-center",
        onClick: onPrev,
        children: "<"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-xl sm:text-2xl lg:text-3xl absolute w-8 sm:w-9 lg:w-10 right-0 translate-x-[50%] sm:translate-x-[75%] top-[50%] z-20 bg-white text-align rounded-2xl sm:rounded-4xl text-primary cursor-pointer aspect-square hidden sm:flex items-center justify-center",
        onClick: onNext,
        children: ">"
      }
    )
  ] });
};
const Slide = ({ item, i }) => {
  const slide = useSwiperSlide();
  const swiper = useSwiper();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "button",
      className: `transition-all duration-300 rounded-xl cursor-pointer mt-6 sm:mt-8 lg:mt-10
              ${slide.isActive ? "scale-100 border border-primary bg-secondary z-10 text-primary-text" : "scale-90 border border-quaternary bg-white text-secondary"}
            `,
      onClick: (e) => swiper.slideToLoop(i),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-left items-stretch gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "relative min-w-[80px] sm:min-w-[90px] lg:min-w-[100px]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.image.src,
              alt: `Profile picture of ${item.username}`,
              className: "rounded-xl w-[80px] sm:w-[90px] lg:w-[100px] aspect-square align-bottom absolute top-[-100%] left-0"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "text-center font-semibold text-sm sm:text-base", children: [
            item.name,
            " ",
            /* @__PURE__ */ jsx("br", {}),
            item.username
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border-t-1 p-4 ${slide.isActive ? "border-primary" : "border-quaternary"}`,
            children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "“",
                item.testimonial,
                "”"
              ] }),
              /* @__PURE__ */ jsx(
                SvgStars,
                {
                  color: slide.isActive ? "var(--color-primary)" : "var(--color-quaternary)",
                  className: "transition-colors mt-4 max-w-[50%]"
                }
              )
            ]
          }
        )
      ]
    }
  );
};

const $$Astro = createAstro();
const $$FAQItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQItem;
  const { question } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="group rounded-2xl details-content:h-0 details-content:transition-all details-content:overflow-hidden details-content:duration-300 details-content:ease-in-out open:details-content:h-auto"> <summary class="flex max-h-[60px] sm:max-h-[70px] lg:max-h-[75px] items-center border border-gray-300 justify-between cursor-pointer text-base sm:text-lg font-medium text-gray-800 p-3 sm:p-4 pl-4 sm:pl-6 pr-8 sm:pr-10 rounded-2xl sm:rounded-3xl bg-quaternary group-open:bg-white group-open:border-0 overflow-hidden"> <span class="text-primary-text group-open:text-quaternary transition-color text-sm sm:text-lg lg:text-xl">${question}</span> <svg class="w-8 sm:w-9 lg:w-10 aspect-square transition-transform duration-300 group-open:rotate-180 bg-primary p-1.5 sm:p-2 rounded-full flex-shrink-0" fill="none" stroke="white" stroke-width="3" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="mt-1.5 sm:mt-2 leading-relaxed text-primary-text transition-discrete starting:max-h-0 text-sm sm:text-lg lg:text-xl px-0.5 sm:px-1"> ${renderSlot($$result, $$slots["default"])} </div> </details>`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/faqs/FAQItem.astro", void 0);

const $$FAQs = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "\xBFC\xF3mo puedo acceder al capital fondeado?",
      response: "Debes superar uno de nuestros challenges de evaluaci\xF3n. Estos desaf\xEDos est\xE1n dise\xF1ados para validar tu habilidad y disciplina en el trading deportivo."
    },
    {
      question: "\xBFCu\xE1les son los requisitos para participar en los challenges?",
      response: "Debes superar uno de nuestros challenges de evaluaci\xF3n. Estos desaf\xEDos est\xE1n dise\xF1ados para validar tu habilidad y disciplina en el trading deportivo."
    },
    {
      question: "\xBFMyFondeo es una casa de apuestas o un servicio de apuestas?",
      response: "Debes superar uno de nuestros challenges de evaluaci\xF3n. Estos desaf\xEDos est\xE1n dise\xF1ados para validar tu habilidad y disciplina en el trading deportivo."
    },
    {
      question: "\xBFQu\xE9 pasa si no supero un desaf\xEDo?",
      response: "Debes superar uno de nuestros challenges de evaluaci\xF3n. Estos desaf\xEDos est\xE1n dise\xF1ados para validar tu habilidad y disciplina en el trading deportivo."
    },
    {
      question: "\xBFPuedo operar desde cualquier pa\xEDs?",
      response: "Debes superar uno de nuestros challenges de evaluaci\xF3n. Estos desaf\xEDos est\xE1n dise\xF1ados para validar tu habilidad y disciplina en el trading deportivo."
    },
    {
      question: "\xBFCu\xE1ntos desaf\xEDos o planes de fondeo ofrecen?",
      response: "Debes superar uno de nuestros challenges de evaluaci\xF3n. Estos desaf\xEDos est\xE1n dise\xF1ados para validar tu habilidad y disciplina en el trading deportivo."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-stretch gap-3 sm:gap-4 lg:gap-5 overflow-y-visible"> ${faqs.map(({ question, response }) => renderTemplate`${renderComponent($$result, "FAQItem", $$FAQItem, { "question": question }, { "default": ($$result2) => renderTemplate`${response}` })}`)} </div>`;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/components/landing/faqs/FAQs.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const benefitCards = [
    {
      title: "Escalable",
      icon: "rocket",
      description: "Multiplica tus ganancias sin l\xEDmites"
    },
    {
      title: "Fondeo",
      icon: "money",
      description: "Gana sin arriesgar un d\xF3lar de tu bolsillo"
    },
    {
      title: "Merecimiento",
      icon: "target",
      description: "Tu talento es tu \xFAnica inversi\xF3n."
    },
    {
      title: "Academia",
      icon: "people",
      description: "Aprende, compite y escala con expertos."
    }
  ];
  const stepsCollection = (await getCollection("blogSteps")).sort(
    (a, b) => +a.slug - +b.slug
  );
  const opinionsCollection = await getCollection("opinions");
  if (!opinionsCollection || !stepsCollection) return null;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="landing-hero pt-12 sm:pt-16 md:pt-20 lg:pt-24" data-astro-cid-j7pv25f6> <div class="flex gap-3 sm:gap-4 md:gap-5 flex-col order-2 md:order-1" data-astro-cid-j7pv25f6> <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold" data-astro-cid-j7pv25f6>
¿Tu pasión deportiva no te da ganancias reales?
</h3> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary" data-astro-cid-j7pv25f6>
Hasta ahora
</h1> <p class="font-medium tracking-wide text-sm sm:text-base" data-astro-cid-j7pv25f6>
Transforma tu pasión en un negocio rentable: <br data-astro-cid-j7pv25f6>Te damos el capital y
        la metodología para que operes como un profesional, sin arriesgar tu
        propio dinero.
</p> <a href="/challenges" class="flex mt-4 sm:mt-6 lg:mt-7 px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-xl font-semibold text-secondary w-fit text-sm sm:text-base" data-astro-cid-j7pv25f6>
Empieza tu evaluación
</a> </div> <div class="border border-primary h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] shadow-lg shadow-primary rounded-2xl overflow-hidden fade-on-scroll transition-transform order-1 md:order-2" data-astro-cid-j7pv25f6> <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9ZOLxE1gz_U?controls=0&rel=0&mute=1" title="YouTube video player" allowfullscreen data-astro-cid-j7pv25f6>
      </iframe> </div> </div>   <div id="quienes-somos" class="pt-15 sm:pt-20 md:pt-25 lg:pt-30" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-2" data-astro-cid-j7pv25f6> <div class="flex justify-center order-2 md:order-1" data-aos="fade-right" data-astro-cid-j7pv25f6> <img${addAttribute(stressedImage.src, "src")} alt="Persona estresada"${addAttribute(347, "height")}${addAttribute(295.7, "width")} class="max-w-full h-auto w-48 sm:w-56 md:w-80 aspect-[295/347]" data-astro-cid-j7pv25f6> </div> <div class="space-y-3 sm:space-y-4 md:space-y-5 order-1 md:order-2" data-aos="fade-left" data-astro-cid-j7pv25f6> <h1 class="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold" data-astro-cid-j7pv25f6>
¿Te suena familiar alguna de estas historias?
</h1> ${renderComponent($$result2, "TextListItem", $$TextListItem, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Sabes de deporte, analizas partidos y aún así,
<span class="text-primary" data-astro-cid-j7pv25f6>
¿te cuesta convertir eso en ganancias? No estás solo/a.
</span>
Millones viven esa frustración.
` })} ${renderComponent($$result2, "TextListItem", $$TextListItem, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Eres de los que analiza cada detalle, detecta patrones y sabe
          identificar oportunidades en cada partido.
<span class="text-primary" data-astro-cid-j7pv25f6>
El problema no es tu habilidad, ¡es el tamaño de tu capital!
</span> ` })} <button class="btn bg-white text-secondary ml-0 sm:ml-8 lg:ml-16" data-astro-cid-j7pv25f6>Ver cómo cambiar esto</button> </div> </div> <div class="bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl px-4 sm:px-6 lg:px-10 py-4 sm:py-5 grid grid-cols-1 lg:grid-cols-[75%_25%] relative" data-aos="fade-topudddddddd" data-astro-cid-j7pv25f6> <div class="space-y-2 sm:space-y-3" data-astro-cid-j7pv25f6> <h1 class="text-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" data-astro-cid-j7pv25f6>
¡Hay quienes ya viven del deporte!
</h1> <h3 class="text-secondary text-base sm:text-lg lg:text-xl" data-astro-cid-j7pv25f6>
Su secreto está a punto de ser revelado.
</h3> ${renderComponent($$result2, "TextListItem", $$TextListItem, { "className": "text-secondary", "variant": "all-dark", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Es hora de generar ingresos con tu conocimiento deportivo.
<strong data-astro-cid-j7pv25f6>Esta es tu liga.</strong> ` })} ${renderComponent($$result2, "TextListItem", $$TextListItem, { "className": "text-secondary", "variant": "all-dark", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Detrás de la frustración general, hay una realidad oculta:
<strong data-astro-cid-j7pv25f6>sí es posible vivir del conocimiento deportivo.</strong> Existe
          un grupo de visionarios que han convertido su pasión en una fuente de ingresos
          real, y no, <strong data-astro-cid-j7pv25f6>no tienen más suerte que tú.</strong> ` })} <button class="btn bg-secondary ml-0 sm:ml-6 lg:ml-12 mb-0" data-astro-cid-j7pv25f6>Descubre el Secreto Ahora</button> </div> <img${addAttribute(adviserImage.src, "src")} alt="Asesora"${addAttribute(297, "width")}${addAttribute(336, "height")} class="hidden lg:block absolute right-0 bottom-0 max-w-[200px] xl:max-w-none" data-astro-cid-j7pv25f6> </div> </div>   <div class="flex flex-col items-center" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 lg:gap-2" data-astro-cid-j7pv25f6> <div class="space-y-3 sm:space-y-4 md:space-y-5 order-2 lg:order-1" data-astro-cid-j7pv25f6> <h2 class="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold" data-astro-cid-j7pv25f6>
¡Tu puente al siguiente nivel!
</h2> <p class="text-sm sm:text-base" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>MyFondeo</strong> es la plataforma de fondeo para
<strong data-astro-cid-j7pv25f6> pronósticos deportivos </strong>
diseñada para ti. Aquí, tu conocimiento en deportes es tu mayor
<strong data-astro-cid-j7pv25f6>activo.</strong> </p> <h3 class="text-base sm:text-lg" data-astro-cid-j7pv25f6>Nuestros beneficios</h3> <div class="grid grid-cols-2 lg:flex lg:justify-between w-full gap-2 lg:gap-2" data-astro-cid-j7pv25f6> ${benefitCards.map(({ title, icon, description }) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "title": title, "icon": icon, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${description}` })}`)} </div> </div> <img${addAttribute(happyImage.src, "src")} alt="Persona feliz" class="mask-b-from-75% mask-b-to-99% max-w-full h-auto w-48 sm:w-56 md:w-64 lg:w-100 order-1 lg:order-2 mx-auto aspect-[296/347]" data-astro-cid-j7pv25f6> </div> <div class="bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl p-4 sm:p-6 lg:p-7.5 text-secondary w-full max-w-none lg:w-[120%]" data-astro-cid-j7pv25f6> <h2 class="text-lg sm:text-xl lg:text-2xl font-bold" data-astro-cid-j7pv25f6>
Así de simple es operar con MyFondeo.
</h2> <p class="text-base sm:text-lg lg:text-xl font-medium" data-astro-cid-j7pv25f6>
Tu Camino al Éxito en 3 Pasos:
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-3 px-0 sm:px-2 lg:px-5" data-astro-cid-j7pv25f6> ${stepsCollection.map(async ({ data, render }, i) => {
    const { Content } = await render();
    return renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "number": i + 1, "title": data.title, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, { "data-astro-cid-j7pv25f6": true })} ` })}`;
  })} </div> </div> </div>   <div class="flex flex-col items-center max-w-full" data-astro-cid-j7pv25f6> <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-8 lg:mb-10 px-4" data-astro-cid-j7pv25f6>
Ellos ya viven del deporte. Conoce sus resultados.
</h1> <div class="w-full max-w-none lg:w-[130%]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "UsersOpinionsCarrousel", UsersOpinionsCarrousel, { "client:visible": true, "items": opinionsCollection.map(({ data }) => data), "client:component-hydration": "visible", "client:component-path": "@components/landing/UsersOpinionsCarrousel.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="flex flex-col items-center pt-16 sm:pt-20 lg:pt-29" id="FAQ" data-astro-cid-j7pv25f6> <div class="w-full max-w-screen lg:w-[150%] flex flex-col-reverse lg:grid lg:grid-cols-[35%_55%] lg:gap-[10%] pb-16 sm:pb-24 lg:pb-32 justify-center" data-astro-cid-j7pv25f6> <div data-aos="fade-right" data-aos-mirror="true" data-aos-offset="500" class="order-2 lg:order-1" data-astro-cid-j7pv25f6> <h1 class="text-3xl sm:text-4xl lg:text-5xl text-primary-text font-bold text-center lg:text-left" data-astro-cid-j7pv25f6>
Despeja tus dudas <br data-astro-cid-j7pv25f6> <span class="text-primary" data-astro-cid-j7pv25f6>(al instante)</span> </h1> <div class="flex justify-center lg:block" data-astro-cid-j7pv25f6> <img${addAttribute(doubting.src, "src")} alt="" class="max-w-full h-auto w-64 sm:w-80 lg:w-auto" data-astro-cid-j7pv25f6> </div> </div> <div class="order-1 lg:order-2 mt-8 lg:mt-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FAQS", $$FAQs, { "data-astro-cid-j7pv25f6": true })} </div> </div> </div> <div class="px-2 sm:px-4 lg:px-5 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 lg:gap-0" data-astro-cid-j7pv25f6> <div class="order-2 lg:order-1 text-center lg:text-left" data-astro-cid-j7pv25f6> <span class="text-2xl sm:text-3xl lg:text-4xl text-primary-text font-semibold mt-2" data-astro-cid-j7pv25f6>Convierte tu conocimiento deportivo en</span> <br data-astro-cid-j7pv25f6> <span class="text-4xl sm:text-5xl lg:text-7xl text-primary font-bold" data-astro-cid-j7pv25f6>Ingresos reales</span> <button class="btn bg-white text-secondary mt-8 sm:mt-16 lg:mt-32 block mx-auto lg:ml-4" style="padding: 1rem 2rem; font-size: 0.875rem;" data-astro-cid-j7pv25f6>
Quiero Empezar
</button> </div> <div class="order-1 lg:order-2 flex justify-center" data-astro-cid-j7pv25f6> <img${addAttribute(surprisedPerson.src, "src")} alt="" class="max-w-full h-auto w-64 sm:w-80 lg:w-100" data-astro-cid-j7pv25f6> </div> </div> ` })} `;
}, "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/index.astro", void 0);

const $$file = "C:/code/work/my-fondeo/my-fondeo-portal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
