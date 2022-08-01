"use strict";
(() => {
var exports = {};
exports.id = 4770;
exports.ids = [4770,818,2149,3970,2208,6157,3003,7787,3309];
exports.modules = {

/***/ 2515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function getServerSideProps(context1) {
    const id = context1.params.id;
    const res = await fetch(`https://dreamwebbackend.herokuapp.com/allRoutes/SeoService/${id}`);
    const json = await res.json();
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";
    const usersloggedIn = await fetch("https://dreamwebbackend.herokuapp.com/authentication/find", {
        credentials: "include",
        headers: {
            cookie: context1.req.cookies.token
        }
    });
    const user = await usersloggedIn.json();
    if (!user || !user.username) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        };
    }
    if (!context1.req.cookies.token) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        };
    }
    return {
        props: {
            json,
            user,
            merchant
        }
    };
}
const index = ({ json , user , merchant  })=>{
    const { 0: read , 1: setRead  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: laws , 1: setLaws  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: rialsPay , 1: setrialsPay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const law = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://dreamwebbackend.herokuapp.com/allRoutes/laws", {
            withCredentials: true
        }).then((res)=>{
            setLaws(res.data[0].text);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            law();
            setrialsPay(json && json.payPrice + "0");
        }
    }, []);
    const paying = async (e)=>{
        e.preventDefault();
        const Post = {
            object: {
                json
            },
            email: user.email,
            category: "seo",
            des: description,
            amount: parseInt(rialsPay),
            description: json.title,
            callback_url: `http://localhost:3000/order/buyComplete/${rialsPay}/`,
            merchant_id: merchant
        };
        await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/sell/pay`, Post, {
            withCredentials: true
        }).then((res)=>{
            if (res.data.errMessage) {
                setErr(res.data);
            }
            if (!res.data.errMessage) {
                localStorage.setItem("object", JSON.stringify(res.data));
                window.location = `https://www.zarinpal.com/pg/StartPay/${res.data.post.data.authority}`;
            }
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "order-web",
        children: [
            read === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setRead(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            read === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "law",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        onClick: ()=>setRead(false)
                        ,
                        src: "/images/cancel (1).png",
                        alt: ""
                    }),
                    laws && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: laws
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    " سفارش آنلاین ",
                    json.title
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: `نام و نام خانوادگی: `,
                        value: `نام و نام خانوادگی: ${user.username} ${user.number[0].family}`,
                        onChange: (e)=>setUserName(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: "شماره همراه",
                        value: `شماره همراه: ${user.number[0].number}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: `کد ملی: `,
                        value: `کد ملی: ${user.number[0].meliCode}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: "ایمیل",
                        value: `ایمیل: ${user.email}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        onChange: (e)=>setDescription(e.target.value)
                        ,
                        style: {
                            fontWeight: "600",
                            width: "92%",
                            marginTop: "15px",
                            borderRadius: "5px",
                            border: "1px solid silver",
                            height: "100px"
                        },
                        placeholder: "توضیحات بیشتر ... (دلخواه)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "99%",
                                margin: "10px 0px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "قوانین وبسایت را مطالعه کردم و با آن موافقم .",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            style: {
                                                cursor: "pointer",
                                                pointerEvents: "all"
                                            },
                                            onClick: ()=>setRead(true)
                                            ,
                                            children: "قوانین وبسایت"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "payment",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "مبلغ قابل پرداخت:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: json.price
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        onClick: paying,
                        children: "پرداخت آنلاین"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7513], () => (__webpack_exec__(2515)));
module.exports = __webpack_exports__;

})();