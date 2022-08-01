"use strict";
exports.id = 3286;
exports.ids = [3286];
exports.modules = {

/***/ 3286:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Exclusive = ()=>{
    const { 0: newform , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: des , 1: setDes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: newtitle , 1: setNewTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newprice , 1: setNewPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newtype , 1: setNewType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newdes , 1: setnewDes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: categoryFirst , 1: setCategoryFirst  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: categorySecond , 1: setCategorySecond  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: categoryThird , 1: setCategoryThird  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: required , 1: setRequired  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const postHandler = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/adminRoute/exclusiveForm`, newform, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    alert(res.data, errMessage);
                    setLoading(false);
                }
                alert(res.data.Message);
                setLoading(false);
                setTitle("");
                setType("");
                setPrice("");
                setDes("");
                setCategoryFirst("");
                setCategorySecond("");
                setCategoryThird("");
            });
        } catch (err) {}
    };
    const GetForm = async ()=>{
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${Api}/adminRoute/exclusiveForm`, {
                withCredentials: true
            }).then((res)=>{
                setForm(res.data[0].form);
            });
        } catch (err) {}
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        GetForm();
    }, []);
    const addForm = (e)=>{
        e.preventDefault();
        const obj = {
            title,
            type,
            price,
            des,
            categoryFirst,
            categorySecond,
            categoryThird,
            required: JSON.parse(required)
        };
        setForm([
            ...newform,
            obj
        ]);
        alert("فرم افزوده شد!");
    };
    const update = async (e)=>{
        e.preventDefault();
        try {
            let newArr = [
                ...newform
            ];
            newArr[edit.id] = {
                title: newtitle,
                required: JSON.parse(required),
                des: newdes,
                price: newprice,
                type: newtype,
                categoryFirst: categoryFirst,
                categorySecond: categorySecond,
                categoryThird: categoryThird
            };
            setForm(newArr);
            setLoading(true);
            axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/adminRoute/exclusiveForm`, newArr, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    alert(res.data, errMessage);
                    setLoading(false);
                }
                alert(res.data.Message);
                setLoading(false);
            });
        } catch (err) {}
    };
    console.log(JSON.parse(required));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            edit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: "1"
                },
                onClick: ()=>setEdit(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "products",
                style: {
                    flexFlow: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        style: {
                            padding: "20px",
                            alignItems: "flex-start"
                        },
                        encType: "multipart/form-data",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "نام ویژگی",
                                type: "text",
                                onChange: (e)=>setTitle(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "نوع",
                                type: "text",
                                onChange: (e)=>setType(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: " قیمت به تومان",
                                type: "text",
                                onChange: (e)=>setPrice(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                onChange: (e)=>setCategoryFirst(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "دسته بندی اول"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "shop",
                                        children: "فروشگاهی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "company",
                                        children: " شرکتی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "base",
                                        children: "پایه"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                onChange: (e)=>setCategorySecond(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "دسته بندی دوم"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "shop",
                                        children: "فروشگاهی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "company",
                                        children: " شرکتی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "base",
                                        children: "پایه"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                onChange: (e)=>setCategoryThird(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "دسته بندی سوم"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "shop",
                                        children: "فروشگاهی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "company",
                                        children: " شرکتی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "base",
                                        children: "پایه"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                onChange: (e)=>setRequired(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: false,
                                        children: " الزام انتخاب"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: false,
                                        children: "false"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: true,
                                        children: "true"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                style: {
                                    width: "40%",
                                    height: "200px"
                                },
                                placeholder: "معرفی",
                                type: "text",
                                onChange: (e)=>setDes(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: addForm,
                                children: "افزودن"
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
                    edit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "secc-comment",
                        style: {
                            background: "none",
                            height: "100%",
                            zIndex: "151"
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
                                    placeholder: "نام ویژگی",
                                    value: newtitle,
                                    onChange: (e)=>setNewTitle(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "نوع",
                                    value: newdes,
                                    onChange: (e)=>setnewDes(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "نوع",
                                    value: newtype,
                                    onChange: (e)=>setNewType(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "قیمت",
                                    value: newprice,
                                    onChange: (e)=>setNewPrice(e.target.value)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    onChange: (e)=>setCategoryFirst(e.target.value)
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: categoryFirst || "دسته بندی اول"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "shop",
                                            children: "فروشگاهی"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "company",
                                            children: " شرکتی"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "base",
                                            children: "پایه"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    defaultValue: categorySecond,
                                    onChange: (e)=>setCategorySecond(e.target.value)
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: categorySecond || "دسته بندی دوم"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "shop",
                                            children: "فروشگاهی"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "company",
                                            children: " شرکتی"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "base",
                                            children: "پایه"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    defaultValue: categoryThird,
                                    onChange: (e)=>setCategoryThird(e.target.value)
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: categoryThird || "دسته بندی سوم"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "shop",
                                            children: "فروشگاهی"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "company",
                                            children: " شرکتی"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "base",
                                            children: "پایه"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    onChange: (e)=>setRequired(e.target.value)
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: required,
                                            children: "الزام انتخاب"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: false,
                                            children: "false"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: true,
                                            children: " true"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    style: {
                                        height: "200px"
                                    },
                                    placeholder: "معرفی",
                                    type: "text",
                                    value: newdes,
                                    onChange: (e)=>setnewDes(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: update,
                                    children: "آپدیت"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "order-ex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            style: {
                                alignItems: "center",
                                height: "100%",
                                paddingBottom: "15px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    width: "10%"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "انتخاب"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    width: "20%"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "نام ویژگی"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    width: "45%"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "معرفی"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    width: "10%"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "نوع"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                style: {
                                                    width: "15%"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: "قیمت (تومان)"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: newform && newform.map((res1, idx)=>{
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    onClick: ()=>{
                                                        setEdit({
                                                            ...res1,
                                                            id: idx
                                                        });
                                                        setNewPrice(res1.price);
                                                        setNewTitle(res1.title);
                                                        setNewType(res1.type);
                                                        setnewDes(res1.des);
                                                        setCategoryThird(res1.categoryThird);
                                                        setCategorySecond(res1.categorySecond);
                                                        setCategoryFirst(res1.categoryFirst);
                                                        setRequired(res1.required);
                                                    },
                                                    className: "tr-news",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "checkbox",
                                                                checked: ()=>order.find((res)=>res.name === order.name
                                                                    )
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: res1.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: res1.des
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: res1.type
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: res1.price
                                                            })
                                                        })
                                                    ]
                                                })
                                            }));
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {})
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exclusive);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;