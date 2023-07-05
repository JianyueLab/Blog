"use strict";
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 7080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ first_day_of_new_blog),
  "meta": () => (/* binding */ meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(5649);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/Prose.jsx


function Prose({ children , className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(className, "prose dark:prose-invert"),
        children: children
    });
}

// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(3652);
;// CONCATENATED MODULE: ./src/components/ArticleLayout.jsx






function ArrowLeftIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function ArticleLayout({ children , meta , isRssFeed =false , previousPathname  }) {
    let router = (0,router_.useRouter)();
    if (isRssFeed) {
        return children;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `${meta.title} - JianyueHugo`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meta.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16 lg:mt-32",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xl:relative",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto max-w-2xl",
                        children: [
                            previousPathname && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>router.back(),
                                "aria-label": "Go back to articles",
                                className: "group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftIcon, {
                                    className: "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                                                children: meta.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                                                dateTime: meta.date,
                                                className: "order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ml-3",
                                                        children: (0,formatDate/* formatDate */.p)(meta.date)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Prose, {
                                        className: "mt-8",
                                        children: children
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/articles/first_day_of_new_blog.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "Valor",
    date: "2023-05-07",
    title: "Dairy For 5.7.2023",
    description: "A diary of my new blog"
};
const MDXLayout = (props)=>jsx_runtime_.jsx(ArticleLayout, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    return jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}
function MDXContent(props = {}) {
    return jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const first_day_of_new_blog = (MDXContent);


/***/ })

};
;