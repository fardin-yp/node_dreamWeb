"use strict";
exports.id = 2935;
exports.ids = [2935];
exports.modules = {

/***/ 7089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cancel (1).4d362383.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEXiTUznbGzbRUTZQ0LWREP52tr2xMRMaXHhTEvgR0YAwLdjAAAACXRSTlP8/rUq9v74APHtnc+LAAAACXBIWXMAAA+SAAAPkgEEqH6gAAAANElEQVQImUWLQQ4AIAzCGEwH//+wJh68NWmLEW1qICOBBWJXbRBOrVXpD0+FL04LI3bf/QAolAEfnj5/lgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 5577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_cancel_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7089);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Seo = ({ Seoroute , info  })=>{
    const { 0: select , 1: setSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("home");
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: route , 1: setRoute  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: keywords , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: ogType , 1: setOgType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: ogUrl , 1: setOgUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: payPrice , 1: setPayPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (info) {
            const seoInfo = info && info.find((res)=>res.route === select
            );
            if (seoInfo) {
                setTitle(seoInfo.title);
                setDescription(seoInfo.description);
                setKeyword(seoInfo.keywords);
                setOgType(seoInfo.ogType);
                setOgUrl(seoInfo.ogUrl);
            }
        }
    }, [
        select
    ]);
    const postHandler = async (e)=>{
        e.preventDefault();
        const post = {
            title,
            route,
            description,
            keywords,
            ogType,
            ogUrl
        };
        setLoading(true);
        try {
            if (Seoroute === "new-seo") {
                await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/adminRoute/Seo`, post, {
                    withCredentials: true
                }).then((res)=>{
                    if (res.data.errMessage) {
                        alert(res.data.errMessage);
                        setLoading(false);
                    }
                    alert(res.data.Message);
                    setLoading(false);
                });
            }
        } catch (err) {}
    };
    const updateHandler = async (id)=>{
        const post = {
            title,
            route,
            description,
            keywords,
            ogType,
            ogUrl,
            id
        };
        try {
            if (Seoroute === "edit-seo") {
                await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/adminRoute/SeoUpdate`, post, {
                    withCredentials: true
                }).then((res)=>{
                    if (res.data.errMessage) {
                        alert(res.data.errMessage);
                        setLoading(false);
                    }
                    alert(res.data.Message);
                    setLoading(false);
                });
            }
        } catch (err) {}
    };
    const serviceHandler = async (e)=>{
        e.preventDefault();
        const post = {
            title,
            price,
            payPrice,
            propertys: data
        };
        setLoading(true);
        try {
            if (Seoroute === "seo-service") {
                await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/adminRoute/seoService`, post, {
                    withCredentials: true
                }).then((res)=>{
                    if (res.data.errMessage) {
                        alert(res.data.errMessage);
                        setLoading(false);
                    }
                    alert(res.data.Message);
                    setLoading(false);
                });
            }
        } catch (err) {}
    };
    const onchangeInput = ()=>{
        setData([
            ...data,
            value
        ]);
        setValue('');
    };
    const removeHandler = (val)=>{
        setData(data.filter((res)=>res !== val
        ));
    };
    const filter = info && info.filter((res)=>res.route === select
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "products",
        children: [
            Seoroute === 'new-seo' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                style: {
                    padding: "20px"
                },
                onSubmit: postHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "article-holder",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "عنوان ",
                                type: "text",
                                onChange: (e)=>setTitle(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                style: {
                                    left: "0px",
                                    top: "15px",
                                    zIndex: "12"
                                },
                                onChange: (e)=>setRoute(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "انتخاب دسته بندی دامنه ها"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "home",
                                        children: "صفحه اصلی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "exclusive",
                                        children: "سایت اختصاصی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "seo",
                                        children: "سئو"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "contact",
                                        children: "تماس با ما"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "articles",
                                        children: "مقالات"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "shop",
                                        children: "فروشگاهی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "company",
                                        children: "شرکتی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "medical",
                                        children: "پزشکی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "realState",
                                        children: "املاک"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "news",
                                        children: "خبری"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "resturant",
                                        children: "رستوران"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "personal",
                                        children: "شخصی"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "og:type",
                                type: "text",
                                onChange: (e)=>setOgType(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "og:url",
                                type: "text",
                                onChange: (e)=>setOgUrl(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                placeholder: "description",
                                type: "text",
                                onChange: (e)=>setDescription(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                placeholder: "حروف کلیدی",
                                type: "text",
                                onChange: (e)=>setKeyword(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        disabled: loading,
                        onClick: postHandler,
                        children: [
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "30px",
                                    width: "30px",
                                    top: "25%"
                                },
                                className: "loading-spinner"
                            }),
                            " ارسال"
                        ]
                    })
                ]
            }),
            Seoroute === 'edit-seo' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    margin: "auto",
                    zIndex: "20"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        style: {
                            marginTop: "-20px",
                            width: "80%",
                            zIndex: "12",
                            background: "#ff9800",
                            color: "white"
                        },
                        onChange: (e)=>setSelect(e.target.value)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                children: "انتخاب دسته بندی دامنه ها"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "home",
                                children: "صفحه اصلی"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "exclusive",
                                children: "سایت اختصاصی"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "seo",
                                children: "سئو"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "contact",
                                children: "تماس با ما"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "news",
                                children: "مقالات"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "shop",
                                children: "فروشگاهی"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "company",
                                children: "شرکتی"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "medical",
                                children: "پزشکی"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "realState",
                                children: "املاک"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "news",
                                children: "خبری"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "resturant",
                                children: "رستوران"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "personal",
                                children: "شخصی"
                            })
                        ]
                    }),
                    filter && filter.map((res)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            style: {
                                padding: "20px",
                                height: "100%"
                            },
                            onSubmit: postHandler,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "article-holder",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: title,
                                            style: {
                                                width: "86%"
                                            },
                                            placeholder: "عنوان",
                                            type: "text",
                                            onChange: (e)=>setTitle(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: ogType,
                                            placeholder: "og:type",
                                            type: "text",
                                            onChange: (e)=>setOgType(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: ogUrl,
                                            placeholder: "og:url",
                                            type: "text",
                                            onChange: (e)=>setOgUrl(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            value: description,
                                            placeholder: "description",
                                            type: "text",
                                            onChange: (e)=>setDescription(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            value: keywords,
                                            placeholder: "حروف کلیدی",
                                            type: "text",
                                            onChange: (e)=>setKeyword(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    disabled: loading,
                                    onClick: ()=>updateHandler(res._id)
                                    ,
                                    children: [
                                        loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                height: "30px",
                                                width: "30px",
                                                top: "25%"
                                            },
                                            className: "loading-spinner"
                                        }),
                                        " تایید ویرایش"
                                    ]
                                })
                            ]
                        }));
                    })
                ]
            }),
            Seoroute === 'seo-service' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                style: {
                    paddingBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: (e)=>setTitle(e.target.value)
                        ,
                        placeholder: "عنوان"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: (e)=>setPrice(e.target.value)
                        ,
                        placeholder: "قیمت"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: (e)=>setPayPrice(e.target.value)
                        ,
                        style: {
                            marginLeft: "46%"
                        },
                        placeholder: " قیمت درگاه"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "86%",
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                defaultValue: value,
                                placeholder: "ویژگی ها",
                                onChange: (e)=>setValue(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                onClick: onchangeInput,
                                style: {
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    width: "40px",
                                    textAlign: "center",
                                    margin: "auto 10px",
                                    height: "40px",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    backgroundColor: "black",
                                    color: "white"
                                },
                                children: "+"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "seoService-vijegi",
                        children: data.length > 0 && data.map((res)=>{
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    res,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        width: 20,
                                        height: 20,
                                        src: _images_cancel_1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                        onClick: ()=>removeHandler(res)
                                        ,
                                        alt: ""
                                    })
                                ]
                            }));
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        disabled: loading,
                        onClick: serviceHandler,
                        children: [
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "30px",
                                    width: "30px",
                                    top: "25%"
                                },
                                className: "loading-spinner"
                            }),
                            " ارسال"
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;