"use strict";
exports.id = 3344;
exports.ids = [3344];
exports.modules = {

/***/ 3344:
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
/* harmony import */ var _editor_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3016);
/* harmony import */ var _editor_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7729);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Question = ()=>{
    const { 0: question , 1: setQuestion  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: answer , 1: setAnswer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: route , 1: setRoute  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: questions , 1: setQuestions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const postHandler = async (e)=>{
        e.preventDefault();
        const post = {
            question,
            answer,
            route
        };
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/adminRoute/questions`, post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    alert(res.data.errMessage);
                    setLoading(false);
                }
                alert(res.data.Message);
                setLoading(false);
            });
        } catch (err) {}
    };
    const getQuestions = async ()=>{
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${Api}/allRoutes/articles`).then((res)=>{
                setQuestions(res.data.findQuestions);
            });
        } catch (err) {}
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getQuestions();
    }, []);
    const update = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const post = {
                question,
                answer,
                route,
                id: edit._id
            };
            axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/adminRoute/updateQuestions`, post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    alert(res.data, errMessage);
                    setLoading(false);
                    setLoading(false);
                }
                alert(res.data.Message);
                setLoading(false);
            });
        } catch (err) {}
    };
    const deleteQuestions = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const post = {
                id: id
            };
            axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/adminRoute/deleteQuestions`, post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    alert(res.data, errMessage);
                    setLoading(false);
                    setLoading(false);
                }
                alert(res.data.Message);
                setLoading(false);
            });
        } catch (err) {}
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "products",
        style: {
            flexFlow: "column",
            alignItems: "center"
        },
        children: [
            edit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setEdit(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setId(null)
                ,
                id: "backDrop",
                children: "hello"
            }),
            id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "آیا این سوال حذف شود ؟"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            background: "#fe1919"
                        },
                        onClick: deleteQuestions,
                        children: " حذف پست"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                style: {
                    padding: "20px"
                },
                onSubmit: postHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "article-holder",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "عنوان پرسش",
                                type: "text",
                                onChange: (e)=>setQuestion(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                onChange: (e)=>setRoute(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "مکان مورد استفاده"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "home",
                                        children: "صفحه اصلی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "exclusive",
                                        children: "صفحه سایت اختصاصی"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_editor_Editor__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                setProperty: setAnswer
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
                            "ارسال"
                        ]
                    })
                ]
            }),
            questions && questions.map((res, idx)=>{
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    style: {
                        position: "relative",
                        marginTop: "15px",
                        cursor: "pointer"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            style: {
                                padding: "10px",
                                borderRadius: "50%",
                                position: "absolute",
                                right: "10px",
                                background: "cyan",
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                justifyContent: "center",
                                width: "30px",
                                height: "30px"
                            },
                            children: idx + 1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            style: {
                                width: "80%"
                            },
                            value: res.question
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: (e)=>{
                                e.preventDefault();
                                setId(res._id);
                            },
                            style: {
                                marginTop: "0",
                                background: "red",
                                width: "35%"
                            },
                            children: "حذف"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: (e)=>{
                                e.preventDefault();
                                setEdit(res);
                                setAnswer(res.answer);
                                setQuestion(res.question);
                                setRoute(res.route);
                            },
                            style: {
                                marginTop: "0",
                                width: "35%"
                            },
                            children: "ویرایش"
                        })
                    ]
                }));
            }),
            edit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "secc-comment",
                style: {
                    background: "none",
                    height: "100%",
                    zIndex: "185"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    style: {
                        padding: "20px",
                        alignItems: "flex-start",
                        position: "relative"
                    },
                    encType: "multipart/form-data",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: {
                                cursor: "pointer",
                                width: "20px",
                                animation: "none",
                                height: "20px",
                                position: "absolute",
                                left: "10px",
                                top: "10px"
                            },
                            src: "/images/cancel (1).png",
                            onClick: ()=>setEdit(false)
                            ,
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            value: question,
                            placeholder: "عنوان پرسش",
                            type: "text",
                            onChange: (e)=>setQuestion(e.target.value)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            value: route,
                            onChange: (e)=>setRoute(e.target.value)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "",
                                    children: "مکان مورد استفاده"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "home",
                                    children: "صفحه اصلی"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "exclusive",
                                    children: "صفحه سایت اختصاصی"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_editor_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            setProperty: setAnswer,
                            data: answer
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: loading,
                            onClick: update,
                            children: "آپدیت"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;