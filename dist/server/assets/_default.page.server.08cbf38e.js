"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var ReactDOMServer = require("react-dom/server");
var React = require("react");
var vitePluginSsr = require("vite-plugin-ssr");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var PageLayout$1 = /* @__PURE__ */ (() => "/* This CSS is common to all pages */\n\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n}\n\n.navitem {\n  padding: 3px;\n}\n")();
function PageLayout({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(React__default["default"].StrictMode, {
    children: /* @__PURE__ */ jsxRuntime.jsxs(Layout, {
      children: [/* @__PURE__ */ jsxRuntime.jsxs(Sidebar, {
        children: [/* @__PURE__ */ jsxRuntime.jsx("a", {
          className: "navitem",
          href: "/",
          children: "Home"
        }), /* @__PURE__ */ jsxRuntime.jsx("a", {
          className: "navitem",
          href: "/hours",
          children: "Hours"
        }), /* @__PURE__ */ jsxRuntime.jsx("a", {
          className: "navitem",
          href: "/staff",
          children: "Staff"
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx(Content, {
        children
      })]
    })
  });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      display: "flex",
      maxWidth: 900,
      margin: "auto"
    },
    children
  });
}
function Sidebar({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      padding: 20,
      paddingTop: 42,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      lineHeight: "1.8em"
    },
    children
  });
}
function Content({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      padding: 20,
      paddingBottom: 50,
      borderLeft: "2px solid #eee",
      minHeight: "100vh"
    },
    children
  });
}
const passToClient = ["pageProps"];
const defaultDocumentProps = {
  title: "Home",
  description: "We teach computer graphics!"
};
function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  const pageHtml = ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ jsxRuntime.jsx(PageLayout, {
    children: /* @__PURE__ */ jsxRuntime.jsx(Page, {
      ...pageProps
    })
  }));
  const documentProps = {
    ...defaultDocumentProps,
    ...pageContext.pageExports.documentProps
  };
  return vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${documentProps.title} | CSCI 1230</title>
        <meta name="description" content="${documentProps.description}">
      </head>
      <body>
        <div id="page-view">
          ${vitePluginSsr.dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`;
}
exports.passToClient = passToClient;
exports.render = render;
