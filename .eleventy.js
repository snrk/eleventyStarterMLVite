const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const postcssNesting = require('postcss-nesting');
const postcssCustomMedia = require('postcss-custom-media');
const Image = require("@11ty/eleventy-img");

async function imageShortcode (src, alt, sizes, loading, css) {
    let metadata = await Image(src, {
        widths: [600, 754, 1508, "auto"],
        formats: ["avif", "webp", "jpeg"],
        outputDir: "_site/assets/images",
        urlPath: "/assets/images/"
    });

    let imageAttributes = {
        alt,
        sizes,
        decoding: "async",
        loading: loading,
        class: css,
        "data-url": metadata.jpeg[0].url,
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

async function shareImageShortcode (src) {

    let metadata = await Image(src, {
        widths: [600],
        formats: ["jpeg"],
        outputDir: "_site/assets/images",
        // urlPath: "wwww.e2i-expertises/assets/",
        urlPath: "/assets/"

    });

    const data = metadata.jpeg[0];
    // data.url might be /blog/hello-world/xfO_genLg4-600.jpeg
    // note the filename is a content hash-width combination
    return data.url;
}


module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("shareImageUri", shareImageShortcode);
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    eleventyConfig.setServerPassthroughCopyBehavior('copy');
    eleventyConfig.addPassthroughCopy("public");

    eleventyConfig.addPassthroughCopy("src/en");
    eleventyConfig.addPassthroughCopy("src/fr");
    eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "assets/images/" });
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/js/");
    eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.addGlobalData("env", process.env.ELEVENTY_ENV || "development");

    let base = "/"; // Valeur par défaut pour le mode de build

    if (process.env.ELEVENTY_ENV === "livetest") {
        base = "/e2i/";
    }

    eleventyConfig.addPlugin(EleventyVitePlugin, {

        // defaults are shown
        viteOptions: {
            publicDir: 'public',
            clearScreen: false,
            server: {
                mode: "development",
                host: "192.168.1.71",
                middlewareMode: true,
            },
            appType: 'custom',
            assetsInclude: ['**/*.xml', '**/*.txt', '**/.htaccess.*'],
            css: {
                postcss: {
                    plugins: [
                        postcssNesting,
                        postcssCustomMedia
                    ],
                },
            },
            build: {
                mode: "production",
                rollupOptions: {
                    output: {
                        assetFileNames: "assets/[name].[ext]",
                    },
                },
            },
            base: base,
        }
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        passthroughFileCopy: true,
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
}