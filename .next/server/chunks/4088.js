"use strict";
exports.id = 4088;
exports.ids = [4088];
exports.modules = {

/***/ 4088:
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
/* harmony import */ var _images_loadingshop_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(140);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const editAricle = ()=>{
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: des , 1: setDes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: info , 1: setInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: articles , 1: setArticles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: deleteProduct , 1: setDeleteProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    const postHandler = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        try {
            formData.append("title", title);
            formData.append("image", image);
            formData.append("id", id);
            formData.append("info", info);
            await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/adminRoute/ArticleUpdate`, formData, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    alert(res.data.errMessage);
                    setErr(res.data.errMessage);
                    setLoading(false);
                }
                alert(res.data.Message);
                setMessage(res.data.Message);
                setLoading(false);
                setEdit(false);
            });
        } catch (err) {
            setLoading(false);
        }
    };
    const getArticles = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${Api}/allRoutes/articles`, {
            withCredentials: true
        }).then((res)=>{
            setArticles(res.data.findPost);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getArticles();
    }, []);
    const uploadImage = async (e)=>{
        const images = e.target.files[0];
        setImage(images);
    };
    const deletePR = async (e)=>{
        e.preventDefault();
        const post = {
            image: deleteProduct.image
        };
        setLoading(true);
        await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${Api}/adminRoute/delete/articles/${deleteProduct._id} `, post, {
            withCredentials: true
        }).then((res)=>{
            alert(res.data.Message);
            setLoading(false);
            setDeleteProduct(null);
            setEdit('');
        });
    };
    const sure = (e)=>{
        e.preventDefault();
        setDeleteProduct(edit);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "products",
        children: [
            deleteProduct && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setDeleteProduct(null)
                ,
                id: "backDrop",
                children: "hello"
            }),
            deleteProduct && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "آیا این پست حذف شود ؟"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            background: "#fe1919"
                        },
                        onClick: deletePR,
                        children: " حذف پست"
                    })
                ]
            }),
            !edit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "edit-tabels",
                style: {
                    zIndex: "13"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "ویرایش مقالات"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        marginTop: "10px"
                                    },
                                    placeholder: "جستجو...",
                                    onChange: (e)=>setFilter(e.target.value)
                                })
                            ]
                        }),
                        articles.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: "100%",
                                height: "450px",
                                position: "relative",
                                margin: "auto"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                src: _images_loadingshop_gif__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                layout: "fill",
                                alt: ""
                            })
                        }),
                        articles.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "تصویر"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: " نام "
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "دیدگاه"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: articles.length > 0 && articles.filter((res)=>{
                                        return res.title.toLowerCase().includes(filter.toLocaleLowerCase());
                                    }).map((res)=>{
                                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            onClick: ()=>{
                                                setEdit(res);
                                                setTitle(res.title);
                                                setDes(res.des);
                                                setInfo(res.info);
                                                setId(res._id);
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `/uploads/${res.image}`,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: res.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: res.comments.length
                                                })
                                            ]
                                        }));
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {})
                            ]
                        })
                    ]
                })
            }),
            edit.title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                style: {
                    height: "100%",
                    marginTop: "-10px"
                },
                encType: "multipart/form-data",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "90%",
                            background: "#3f51b5",
                            padding: "10px",
                            borderRadius: "10px",
                            color: "white",
                            position: "relative"
                        },
                        children: [
                            "ویرایش مقالات",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                disabled: loading,
                                onClick: sure,
                                style: {
                                    top: "-17px",
                                    padding: "10px",
                                    position: "absolute",
                                    left: "3px",
                                    fontSize: "12px",
                                    width: "max-content",
                                    height: "max-content",
                                    background: "red"
                                },
                                children: "حذف مقاله"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: "title",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: "تصویر",
                        type: "file",
                        filename: "image",
                        onChange: uploadImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_editor_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        setProperty: setInfo,
                        data: info
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
                            "تایید ویرایش"
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editAricle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;