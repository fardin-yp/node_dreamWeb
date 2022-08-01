"use strict";
exports.id = 5336;
exports.ids = [5336];
exports.modules = {

/***/ 5336:
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




const panel = ({ info  })=>{
    const { 0: change , 1: setChange  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: username , 1: setUserName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: roll , 1: setRoll  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const NewAdmin = async (e)=>{
        e.preventDefault();
        const post = {
            username,
            roll,
            email,
            password
        };
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${Api}/auth/signup`, post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    setError(res.data.errMessage);
                    setLoading(false);
                }
                if (res.data.message) {
                    alert(res.data.message);
                    setLoading(false);
                    setChange('');
                }
            });
        } catch (err) {}
    };
    const editAdmin = async (e)=>{
        e.preventDefault();
        const post = {
            username,
            id: info.find[0]._id,
            password
        };
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default().put(`${Api}/auth/editAdmin`, post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    setError(res.data.errMessage);
                    setLoading(false);
                }
                if (res.data.message) {
                    alert(res.data.message);
                    setLoading(false);
                    setChange('');
                }
            });
        } catch (err) {}
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            zIndex: "12"
        },
        children: info && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                width: "100%",
                display: "flex",
                marginTop: "100px",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            },
            children: [
                change && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setChange('')
                    ,
                    id: "backDrop",
                    children: "hello"
                }),
                edit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setEdit('')
                    ,
                    id: "backDrop",
                    children: "hello"
                }),
                change === "newAdmin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "change-profile",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            style: {
                                height: "10%",
                                pointerEvents: "all"
                            },
                            children: [
                                "ادمین جدید",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    onClick: ()=>setChange('')
                                    ,
                                    style: {
                                        width: "20px",
                                        opacity: "0.7",
                                        position: "absolute",
                                        left: "-10px",
                                        top: "0px",
                                        cursor: "pointer"
                                    },
                                    src: "/images/cancel.png",
                                    alt: "cancel"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            style: {
                                height: "90%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "70%",
                                        marginTop: "20px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            direction: "rtl"
                                        },
                                        placeholder: "نام",
                                        onChange: (e)=>setUserName(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "70%",
                                        marginTop: "20px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            direction: "rtl"
                                        },
                                        placeholder: "ایمیل",
                                        onChange: (e)=>setEmail(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "70%",
                                        marginTop: "20px"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        style: {
                                            padding: "10px 20px",
                                            cursor: "pointer",
                                            border: "1px solid grey",
                                            borderRadius: "20px"
                                        },
                                        onChange: (e)=>setRoll(e.target.value)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "roll"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "master",
                                                children: "master"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "poster",
                                                children: "poster"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "ceo",
                                                children: "Ceo"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "support",
                                                children: "support"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "70%",
                                        height: "80px",
                                        marginTop: "20px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            direction: "rtl"
                                        },
                                        placeholder: "رمز عبور",
                                        onChange: (e)=>setPassword(e.target.value)
                                    })
                                }),
                                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "red",
                                        fontSize: "12px",
                                        marginBottom: "-15px",
                                        marginTop: "-20px"
                                    },
                                    children: error
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        background: "#03a9f4"
                                    },
                                    onClick: NewAdmin,
                                    disabled: loading,
                                    children: "ثبت"
                                })
                            ]
                        })
                    ]
                }),
                edit === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "change-profile",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            style: {
                                height: "10%",
                                pointerEvents: "all"
                            },
                            children: [
                                " ویرایش پروفایل",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    onClick: ()=>setEdit(false)
                                    ,
                                    style: {
                                        width: "20px",
                                        opacity: "0.7",
                                        position: "absolute",
                                        left: "-10px",
                                        top: "0px",
                                        cursor: "pointer"
                                    },
                                    src: "/images/cancel.png",
                                    alt: "cancel"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            style: {
                                height: "90%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "70%",
                                        marginTop: "20px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            direction: "rtl"
                                        },
                                        placeholder: "نام جدید",
                                        onChange: (e)=>setUserName(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "70%",
                                        height: "80px",
                                        marginTop: "20px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            direction: "rtl"
                                        },
                                        placeholder: " رمز عبور جدید",
                                        onChange: (e)=>setPassword(e.target.value)
                                    })
                                }),
                                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "red",
                                        fontSize: "12px",
                                        marginBottom: "-15px",
                                        marginTop: "-20px"
                                    },
                                    children: error
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        background: "#03a9f4"
                                    },
                                    onClick: editAdmin,
                                    disabled: loading,
                                    children: "ثبت ویرایش"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "admin-profile",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/uploads/users.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexFlow: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            children: [
                                                info && info.find[0].username,
                                                " خوش آمدید !"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                opacity: "0.8"
                                            },
                                            children: [
                                                " ایمیل :",
                                                info.email,
                                                " "
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "30%",
                                flexFlow: "column",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        background: "#4caf50"
                                    },
                                    onClick: ()=>{
                                        setEdit(true);
                                    },
                                    children: "ویرایش پروفایل"
                                }),
                                info && info.find[0].roll === "master" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setChange("newAdmin")
                                    ,
                                    children: "ادمین جدید"
                                })
                            ]
                        })
                    ]
                }),
                info && info.find[0].roll === "master" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "allAdmin",
                    children: info && info.allAdmin && info.allAdmin.map((res)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/users.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        style: {
                                            boxShadow: "none",
                                            flexFlow: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                children: [
                                                    "نام :",
                                                    res.username || ''
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "ایمیل :",
                                                    res.email || ''
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "roll:",
                                                    res.roll || ''
                                                ]
                                            })
                                        ]
                                    }),
                                    res.roll !== "master" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        children: "ویرایش"
                                    })
                                ]
                            })
                        }, res._id));
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (panel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;