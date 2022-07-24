"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const exportNames = ["clientRouting", "render", "onHydrationEnd", "onPageTransitionStart", "onPageTransitionEnd", "prefetchStaticAssets"];
var __vite_glob_next_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = {
  "/pages/docs/code-blocks.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/code-blocks.page.b270e54b.js");
  }),
  "/pages/docs/code-readability.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/code-readability.page.270731e0.js");
  }),
  "/pages/docs/cpp-guidelines.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/cpp-guidelines.page.a87f7ba0.js");
  }),
  "/pages/docs/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/docs.page.13ceb87f.js");
  }),
  "/pages/docs/inline-code.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/inline-code.page.7e852f68.js");
  }),
  "/pages/hours.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/hours.page.8ccedf27.js");
  }),
  "/pages/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.57836102.js");
  }),
  "/pages/labs/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/labs.page.51948dbc.js");
  }),
  "/pages/labs/lab0.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab0.page.a548fdf4.js");
  }),
  "/pages/labs/lab1.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab1.page.0dba4ffb.js");
  }),
  "/pages/labs/lab10.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab10.page.a49d6c32.js");
  }),
  "/pages/labs/lab11.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab11.page.35e87e51.js");
  }),
  "/pages/labs/lab12.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab12.page.1ebf0347.js");
  }),
  "/pages/labs/lab2.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab2.page.1384f070.js");
  }),
  "/pages/labs/lab4.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab4.page.31bef568.js");
  }),
  "/pages/labs/lab5.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab5.page.a336e875.js");
  }),
  "/pages/labs/lab6.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab6.page.55784325.js");
  }),
  "/pages/labs/lab7.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab7.page.6a86d7d3.js");
  }),
  "/pages/labs/lab8.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/lab8.page.fc68fdfd.js");
  }),
  "/pages/projects/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/projects.page.53324386.js");
  }),
  "/pages/projects/raster/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/raster.page.57f5fae9.js");
  }),
  "/pages/projects/ray/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/ray.page.8da3efd3.js");
  }),
  "/pages/projects/realtime/index.page.mdx": () => Promise.resolve().then(function() {
    return require("./assets/realtime.page.a0e43eae.js");
  })
};
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesEagerRoute1 = {};
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesLazyServer1 = {
  "/renderer/_default.page.server.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.1c7ff138.js");
  })
};
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerClient1 = {
  "/renderer/_default.page.client.jsx": __vite_glob_next_3_0
};
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
exports.isGeneratedFile = isGeneratedFile;
exports.neverLoaded = neverLoaded;
exports.pageFilesEager = pageFilesEager;
exports.pageFilesExportNamesEager = pageFilesExportNamesEager;
exports.pageFilesExportNamesLazy = pageFilesExportNamesLazy;
exports.pageFilesLazy = pageFilesLazy;
