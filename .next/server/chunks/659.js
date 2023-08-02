"use strict";
exports.id = 659;
exports.ids = [659];
exports.modules = {

/***/ 9659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "meta": () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var _components_ArticleLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 


const meta = {
    author: "Valor",
    date: "2023-07-05",
    title: "Diary For 5.7.2023",
    description: "A diary of my new blog"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_2__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        ul: "ul",
        li: "li"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "TO DO:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Review"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Play Genshin"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Yesterday, I let Mr Haoran wrote two letters to Postcrossing website workers that I lost my Postcrossing account and I can't find Chiyoda City in City section in the website.\nThey send email to Mr Haoran and he told me that I need to send email to PC to discribe my problems, but I already registered a new account. So I don't care. As for the location, they said they have it. Ohhh! That's right, I just found it! \"Ichibancho (Tokyo)\""
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "emmmmm, I think that's it."
            })
        ]
    });
}
function MDXContent(props = {}) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;