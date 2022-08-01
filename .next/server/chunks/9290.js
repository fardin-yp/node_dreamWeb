"use strict";
exports.id = 9290;
exports.ids = [9290];
exports.modules = {

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/download.e01e40e9.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAuQACugLE78QAugBMaXECugICugITvxOJ34loibwqAAAABnRSTlP1Kv6zALNTQXt1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMElEQVQImUXKMQIAIAjEsHJA9f8vdjRzmGroGgpVij4op+FGcwGTRFhJcH+eWtiaBxwpAMdpaDv/AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 9290:
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
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7513);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9700);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _download_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(661);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Comment = ({ comments , id , link , admin , type , reCaptcha  })=>{
    const { 0: des , 1: setDes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { find , Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { 0: answer , 1: setAnswer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('false');
    const { 0: secc , 1: setSecc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: comment , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: captcha , 1: setCaptcha  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: perPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(7);
    const { 0: offset , 1: setOffset  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: pageCount , 1: setPageCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const topRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: openAnswer , 1: setOpenAnswer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handlePageClick = (e)=>{
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
        scrollToTop();
    };
    async function sendmessage(e) {
        e.preventDefault();
        setLoading(true);
        const message = {
            name: name,
            email: email,
            des,
            id: id,
            answer: answer,
            captcha: captcha
        };
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/comment/${link}`, message, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    setErr(res.data);
                }
                setLoading(false);
                if (!res.data.errMessage) {
                    setSecc(true);
                    setErr("false");
                    comments.push(res.data);
                }
            });
        } catch (err) {
            setLoading(false);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setComments(comments);
        setPageCount(Math.ceil(comments.slice(0, 30).length / perPage));
    }, []);
    const deleteComment = async (messId)=>{
        setComments(comment.filter((res)=>res._id !== messId
        ));
        const posts = {
            newComments: comment,
            id: id
        };
        axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/adminRoute/removeComment/${type}`, posts, {
            withCredentials: true
        }).then((res)=>{
            alert(res.data.Message);
        });
    };
    let commentCss = [
        'new-comment'
    ];
    if (find.username) {
        commentCss = [
            'new-comment',
            'newCommentInput'
        ];
    }
    const slice = comment && comment.slice(offset, offset + perPage);
    const scrollToTop = ()=>{
        var ref;
        (ref = topRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({
            behavior: "smooth"
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "hole-comment",
            children: [
                secc === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setSecc(false)
                    ,
                    id: "backDrop",
                    children: "hello"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "hh",
                    style: {
                        width: "100%",
                        height: "10%",
                        display: "flex",
                        alignItems: "center",
                        opacity: "0.8",
                        padding: "5px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: '/uploads/conversation.png',
                            style: {
                                width: "35px",
                                margin: "8px",
                                marginRight: "0px"
                            },
                            alt: "message"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                fontWeight: "600"
                            },
                            children: "دیدگاه"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "newComment",
                    className: commentCss.join(" "),
                    children: [
                        answer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                backgroundColor: "#eceef3",
                                padding: "0px 6px",
                                borderRadius: "10px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "پاسخ به ",
                                        answer
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setAnswer("")
                                    ,
                                    style: {
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        background: "none",
                                        color: "black"
                                    },
                                    children: "X"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginTop: "10px",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: find.username ? `${find.username}${find.family}` : null,
                                    style: err.err === 'all' || err === 'name' ? {
                                        border: "1px solid red",
                                        boxShadow: " 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"
                                    } : null,
                                    placeholder: "نام و نام خانوادگی",
                                    onChange: (e)=>setName(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: find ? find.email : null,
                                    style: err.err === 'all' || err === 'email' ? {
                                        border: "1px solid red",
                                        boxShadow: " 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"
                                    } : null,
                                    placeholder: "ایمیل",
                                    onChange: (e)=>setEmail(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            value: secc ? '' : null,
                            style: err.err === 'all' ? {
                                border: "1px solid red",
                                boxShadow: " 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"
                            } : null,
                            placeholder: "دیدگاه خود را وارد کنید...",
                            onChange: (e)=>setDes(e.target.value)
                            ,
                            value: des
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: topRef
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sitekey: reCaptcha,
                            onChange: (val)=>setCaptcha(val)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: loading,
                            onClick: sendmessage,
                            children: "ارسال دیدگاه"
                        }),
                        err.errMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                color: "red",
                                fontWeight: "600",
                                background: "#eceff2",
                                padding: "5px",
                                borderRadius: "5px"
                            },
                            children: err.errMessage
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    style: {
                        width: "100%",
                        margin: "20px",
                        backgroundColor: "silver",
                        height: "1px",
                        opacity: "0.5"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "comments",
                    children: [
                        slice && slice.filter((res)=>!res.answer
                        ).map((mes)=>{
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mess",
                                style: mes.name === openAnswer ? {
                                    height: "max-content"
                                } : null,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            background: "#eafafd",
                                            borderRadius: "5px"
                                        },
                                        className: "c-top",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    fontSize: "13px",
                                                    opacity: "0.5",
                                                    marginRight: "0%"
                                                },
                                                children: mes.time
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        fontWeight: "600"
                                                    },
                                                    children: "ادمین سایت"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    borderRadius: "50%",
                                                    width: "60px",
                                                    height: "60px"
                                                },
                                                src: mes.admin ? '/images/DreamIcon.png' : '/uploads/user.png',
                                                alt: "user"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mess-des",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: mes.answer && mes.answer !== "false" ? {
                                                color: "white"
                                            } : null,
                                            children: mes.des
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "answers",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        setAnswer(mes.name);
                                                        scrollToTop();
                                                    },
                                                    children: "افزودن پاسخ "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        onClick: ()=>setOpenAnswer(mes.name === openAnswer ? "" : mes.name)
                                                        ,
                                                        children: "نمایش همه پاسخ ها "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        width: 15,
                                                        height: 15,
                                                        src: _download_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                        alt: "down-flash"
                                                    })
                                                ]
                                            }),
                                            comment.filter((res)=>res.answer === openAnswer
                                            ).map((res)=>{
                                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: mes.name === openAnswer ? {
                                                        opacity: "1",
                                                        visibility: "visible",
                                                        display: "block"
                                                    } : {
                                                        opacity: "0",
                                                        visibility: "hidden",
                                                        display: "none"
                                                    },
                                                    className: "answer-comment",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "c-top",
                                                            style: res.admin ? {
                                                                background: "#0d2040",
                                                                color: "white"
                                                            } : null,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        fontSize: "13px",
                                                                        opacity: "0.5",
                                                                        marginRight: "0%"
                                                                    },
                                                                    children: res.time
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            fontWeight: "600"
                                                                        },
                                                                        children: res.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: res.admin ? '/uploads/user.png' : '/uploads/user.png',
                                                                    alt: "user"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mess-des",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: res.des
                                                            })
                                                        })
                                                    ]
                                                }));
                                            })
                                        ]
                                    }),
                                    admin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        onClick: ()=>deleteComment(mes._id)
                                        ,
                                        src: "/images/cancel (1).png",
                                        alt: "delete",
                                        style: {
                                            position: "absolute",
                                            left: "-35px",
                                            top: "-5px",
                                            width: "20px",
                                            height: "20px",
                                            cursor: "pointer",
                                            pointerEvents: "all"
                                        }
                                    })
                                ]
                            }, mes._id));
                        }),
                        pageCount > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "comment-paginate",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_5___default()), {
                                nextLabel: ">",
                                previousLabel: "<",
                                pageCount: pageCount,
                                disabledClassName: "dis",
                                onPageChange: handlePageClick,
                                containerClassName: "pagination",
                                subContainerClassName: "pages pagination",
                                activeClassName: "active"
                            })
                        })
                    ]
                }),
                secc && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "secc-comment",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: '/uploads/accept.png',
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "دیدگاه شما با موفقیت ارسال شد !"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                setDes('');
                                setName('');
                                setEmail('');
                                setSecc(false);
                            },
                            children: "متوجه شدم"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;