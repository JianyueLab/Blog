"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 4894:
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
    date: "2023-07-30",
    title: "Easy and fast way to depoly php with nginx",
    description: "A tutorial for nginx, php and mariadb(mysql)"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_2__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        ul: "ul",
        li: "li",
        h2: "h2",
        h3: "h3",
        pre: "pre",
        code: "code",
        span: "span"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Goals & Steps:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "useful php packages"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Edit Nginx config to enable php"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Set a Database and create a user for it"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Lets start !"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "PHP"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Useful packages"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "curl — Performs remote request operations."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "dom — Used to validate Text Widget content and to automatically configure IIS7+."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "exif — Works with metadata stored in images."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "fileinfo — Used to detect the MIME type of file uploads."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "hash — Used for hashing, including passwords and update packages."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "imagick — Provides better image quality for media uploads."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "json — Used for communications with other servers."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "mbstring — Used to properly handle UTF-8 text."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "mysqli — Connects to MySQL for database interactions."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "openssl — Permits SSL-based connections to other hosts."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "pcre — Increases performance of pattern matching in code searches."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "sodium — Validates signatures and provides secure random bytes."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "xml — Used for XML parsing, such as from a third-party site."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "zip — Used for decompressing Plugins, Themes, and WordPress update packages."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "how to fast install them"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-bash",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-bash",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#for debian / ubuntu"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#if you need install with root permission on other user please add sudo at first of command & this will install the latest version with your apt"
                        }),
                        "\n$ ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "apt"
                        }),
                        " update \n$ ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "apt"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "install"
                        }),
                        " -y php php-common php-curl php-dom php-exif php-fileinfo php-hash php-imagick php-json php-mbstring php-mysql php-openssl php-pcre php-sodium php-xml php-zip \n"
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "How to enable php with your NGINX web server"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-bash",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-bash",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 1: Check your php version"
                        }),
                        "\n$ php -version\nPHP ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "7.4"
                        }),
                        ".3-4ubuntu2.19 ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "cli",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "built: Jun ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "27"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "2023"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "15"
                        }),
                        ":49:59",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        " NTS ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        "\nCopyright ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "c",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " The PHP Group\nZend Engine v3.4.0, Copyright ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "c",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " Zend Technologies\nwith Zend OPcache v7.4.3-4ubuntu2.19, Copyright ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "c",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        ", by Zend Technologies\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 2: Edit your config file"
                        }),
                        "\n$ ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "nano"
                        }),
                        " /etc/nginx/sites-available/default\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "# found index line and add a index.php "
                        }),
                        "\nindex index.html index.htm index.nginx-debian.html index.php",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "# found default php quote adn edit it like this."
                        }),
                        "\nlocation ~ ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "\\"
                        }),
                        ".php$ ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  include snippets/fastcgi-php.conf",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n  fastcgi_pass unix:/var/run/php/php7.4-fpm.sock",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 3: press ctrl + X save file & check and restart nginx"
                        }),
                        "\n$ nginx -t ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "# after it said successful countinue or go back and check !"
                        }),
                        "\n$ systemctl restart nginx\n"
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "How to create a mysql database"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-bash",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-bash",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 1: Login mysql"
                        }),
                        "\n$ mysql -u root -p\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 2: Create database & change database_name to your own!!"
                        }),
                        "\n$ CREATE DATABASE database_name",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 3: Create user and give permission"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Change database_name with same above, and edit your own user_name and PWD(password)"
                        }),
                        "\n$ GRANT ALL PRIVILEGES ON database_name.* TO ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'user_name'"
                        }),
                        "@",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'localhost'"
                        }),
                        " IDENTIFIED BY ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'PWD'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "#Step 4: Save & Exit"
                        }),
                        "\n$ FLUSH PRIVILEGES",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n$ EXIT:\n"
                    ]
                })
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