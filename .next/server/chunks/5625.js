"use strict";
exports.id = 5625;
exports.ids = [5625];
exports.modules = {

/***/ 5625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Messages = ({ route  })=>{
    const { 0: contacts , 1: setContacts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: consaltings , 1: setConsaltings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: exclusives , 1: setExclusives  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: Delete , 1: setDelete  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: slice , 1: setSlice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { 0: select , 1: setSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: sure , 1: setSure  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const getMessages = async ()=>{
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${Api}/adminRoute/getMessages`, {
                withCredentials: true
            }).then((res)=>{
                setContacts(res.data.Contacts);
                setConsaltings(res.data.Consaltings);
                setExclusives(res.data.Exclusives);
            });
        };
        getMessages();
    }, []);
    const deleteMessages = async ()=>{
        const post = {
            type: Delete.type,
            id: Delete.id
        };
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${Api}/adminRoute/deleteMessages`, post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.Consaltings) {
                    setConsaltings(res.data.Consaltings);
                    setLoading(false);
                    setDelete(null);
                }
                if (res.data.Contacts) {
                    setContacts(res.data.Contacts);
                    setLoading(false);
                    setDelete(null);
                }
                if (res.data.Exclusives) {
                    setExclusives(res.data.Exclusives);
                    setLoading(false);
                    setDelete(null);
                }
            });
        } catch (err) {
            setLoading(false);
        }
    };
    const addSlice = ()=>{
        setSlice((prev)=>prev + 10
        );
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSlice(10);
    }, [
        route
    ]);
    console.log(select);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "products",
        style: {
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "flex-start"
        },
        children: [
            sure && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                style: {
                    zIndex: "151"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "آیااین پیام حذف شود؟"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        disabled: loading,
                        onClick: deleteMessages,
                        children: [
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "30px",
                                    width: "30px",
                                    top: "25%"
                                },
                                className: "loading-spinner"
                            }),
                            "حذف پیام"
                        ]
                    })
                ]
            }),
            sure && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: "26"
                },
                onClick: ()=>setSure(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            select && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setSelect(null)
                ,
                id: "backDrop",
                children: "hello"
            }),
            select && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "select-Message",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setSure(true)
                        ,
                        children: "Delete"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: `نام : ${select.name}`
                            }),
                            select.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: `ایمیل : ${select.email}`
                            }),
                            select.number && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: `شماره همراه : ${select.number}`
                            }),
                            select.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: ` موضوع پیام : ${select.message}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: ` تاریخ : ${select.timestamp}`
                            })
                        ]
                    }),
                    select.des && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        value: `پیام : ${select.des}`
                    })
                ]
            }),
            route === "send-exclusive" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tabels",
                    style: {
                        width: "100%",
                        justifyContent: "center",
                        zIndex: "13"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "درخواست های وبسایت اختصاصی"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "نام و نام خانوادگی"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "ایمیل"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "شماره تماس"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: exclusives && exclusives.slice(0, slice).map((res)=>{
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                onClick: ()=>{
                                                    setDelete({
                                                        type: "exclusives",
                                                        id: res._id
                                                    });
                                                    setSelect(res);
                                                },
                                                style: {
                                                    backgroundColor: "white",
                                                    position: "relative"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        style: {
                                                            width: "25%"
                                                        },
                                                        children: res.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        style: {
                                                            width: "50%"
                                                        },
                                                        children: res.email
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        style: {
                                                            width: "25%"
                                                        },
                                                        children: res.number
                                                    })
                                                ]
                                            }, res._id));
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {})
                                ]
                            })
                        ]
                    })
                })
            }),
            route === "send-consulting" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tabels",
                    style: {
                        width: "100%",
                        justifyContent: "center",
                        zIndex: "13"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "درخواست های مشاوره"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "نام و نام خانوادگی"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "شماره تماس"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: consaltings && consaltings.map((res)=>{
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                onClick: ()=>{
                                                    setSelect(res);
                                                    setDelete({
                                                        type: "consaltings",
                                                        id: res._id
                                                    });
                                                },
                                                className: "Admin-messages",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        style: {
                                                            width: "50%"
                                                        },
                                                        children: res.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        style: {
                                                            width: "50%"
                                                        },
                                                        children: res.number
                                                    })
                                                ]
                                            }, res._id));
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {})
                                ]
                            })
                        ]
                    })
                })
            }),
            route === "contact-us" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tabels",
                    style: {
                        width: "100%",
                        justifyContent: "center",
                        zIndex: "13"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "پیام های ارتباط با ما"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "نام و نام خانوادگی"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "ایمیل"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "موضوع پیام"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                children: "تاریخ"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: contacts && contacts.map((res)=>{
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                onClick: ()=>{
                                                    setDelete({
                                                        type: "contacts",
                                                        id: res._id
                                                    });
                                                    setSelect(res);
                                                },
                                                style: {
                                                    backgroundColor: "white"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        style: {
                                                            width: "20%"
                                                        },
                                                        children: [
                                                            " ",
                                                            res.name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        style: {
                                                            width: "40%"
                                                        },
                                                        children: [
                                                            " ",
                                                            res.email
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        style: {
                                                            width: "20%"
                                                        },
                                                        children: [
                                                            " ",
                                                            res.message
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        style: {
                                                            width: "20%"
                                                        },
                                                        children: [
                                                            " ",
                                                            res.timestamp
                                                        ]
                                                    })
                                                ]
                                            }, res._id));
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {})
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;