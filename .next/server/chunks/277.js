"use strict";
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 277:
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
/* harmony import */ var _editor_Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7729);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Products = ()=>{
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: off , 1: setOff  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: category , 1: setCategoty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: link , 1: setLink  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: property , 1: setProperty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const postHandler = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("image", image);
            formData.append("price", price);
            formData.append("off", off);
            formData.append("link", link);
            formData.append("Property", property);
            await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${Api}/adminRoute/product`, formData, {
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
            });
        } catch (err) {
            setLoading(false);
        }
    };
    const uploadImage = async (e)=>{
        const images = e.target.files[0];
        setImage(images);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "products",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            encType: "multipart/form-data",
            id: "products-form",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        height: "max-content",
                        width: "90%",
                        background: "#3f51b5",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "white"
                    },
                    children: "پروژه جدید"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "نام",
                    type: "text",
                    onChange: (e)=>setName(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "قیمت",
                    type: "text",
                    onChange: (e)=>setPrice(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "تخفیف",
                    type: "text",
                    onChange: (e)=>setOff(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "لینک",
                    type: "text",
                    onChange: (e)=>setLink(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "تصویر",
                    type: "file",
                    filename: "image",
                    onChange: uploadImage
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    style: {
                        left: "0px",
                        top: "15px"
                    },
                    onChange: (e)=>setCategoty(e.target.value)
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "",
                            children: "انتخاب دسته بندی"
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    style: {
                        width: "87%"
                    },
                    placeholder: "توضیحات ... ",
                    onChange: (e)=>setDescription(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_editor_Editor__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    setProperty: setProperty
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
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;