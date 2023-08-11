const esbuild = require("esbuild");
const Image = require("@11ty/eleventy-img");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const get = require('lodash/get');
const globalSiteData = {
    baseUrl: "https://www.lkhibra.ma",
}
function escapeHtml(unsafe) {
    if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
const makeProps = (/** @type {any[]} */ args) => {
  if (args.length === 1 && typeof args[0] === "object") {
    return {
      ...args[0],
      arg: args[0],
      args,
    };
  }

  return {
    arg: args[0],
    args,
  };
};
/**
 * 
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig 
 * @returns 
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("locale", "en");
  eleventyConfig.addPlugin(require("eleventy-hast-jsx").plugin);
  const jsxsymbol = require("eleventy-hast-jsx").renderComponent;
  eleventyConfig.addNunjucksAsyncShortcode("jsx", async function (name, props) {
    /** @type {Function} */
    const component = eleventyConfig[jsxsymbol];
    // console.log(eleventyConfig[jsxsymbol])
    return await component(name, {
      ...props,
      ctx: {
        ...this.ctx,
        getFilter: (name) => eleventyConfig.getFilter(name).bind(this),
      }
    });
  })
  eleventyConfig.addShortcode(
    "image",
    async function (src, alt, formats, widths, sizes, attributes = {}) {
      let metadata = await Image(src, {
        widths,
        formats,
        urlPath: "/img/",
        outputDir: "./dist/img",
      });

      let imageAttributes = {
        alt,
        sizes,
        ...attributes,
      };

      // You bet we throw an error on a missing alt (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
    }
  );
  eleventyConfig.addGlobalData("site", globalSiteData);
  eleventyConfig.addPassthroughCopy({
    public: "./",
    "node_modules/cleave.js/dist/addons/cleave-phone.ma.js":
      "./js/cleave-phone.ma.js",
  });
  eleventyConfig.on("afterBuild", () => {
    return esbuild.build({
      entryPoints: [
        "./plugins/app.ts",
        "./plugins/cta.ts",
        "./plugins/swiper.ts",
        "./plugins/mask.js",
      ],
      bundle: true,
      target: ["chrome58", "firefox57", "safari11", "edge18"],
      outdir: "./dist/js",
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
    });
  });
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "en", // Required, this site uses "en"
    errorMode: "strict",
  });
  eleventyConfig.addFilter("i18n", function (value) {
    const page = this.page || this.ctx.page;
    const lang = page.lang ?? "en";
    const translations = this.ctx.translation;
    const translation = get(translations[lang], value, value);
    if (!translation)
      console.error(`"${value}" translation not found for lang: ${lang}`); // throw new Error(`"${value}" translation not found for lang: ${lang}`)
    return escapeHtml(translation);
  });
  eleventyConfig.addFilter("i18njson", function (value) {
    const page = this.page || this.ctx.page;
    const translations = this.ctx.translation;
    const lang = page.lang ?? "en";
    const translation = get(translations[lang], value, value);
    if (!translation)
      console.error(`"${value}" translation not found for lang: ${lang}`); // throw new Error(`"${value}" translation not found for lang: ${lang}`)
    return JSON.stringify(translation);
  });
  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value);
  });
  eleventyConfig.addWatchTarget("./plugins/**/*.{ts,js}");
  eleventyConfig.addWatchTarget("./_components/**/*.{tsx,jsx}");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};