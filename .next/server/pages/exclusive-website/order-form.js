"use strict";
(() => {
var exports = {};
exports.id = 4905;
exports.ids = [4905,818,2149,3970,2208,6157,3003,7787,6638,3309];
exports.modules = {

/***/ 9767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1035);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7365);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__, _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__, _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_6__]);
([_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__, _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__, _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getServerSideProps(context1) {
    const loggedIn = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/exclusiveForm', {
        method: 'GET'
    });
    const logged = await loggedIn.json();
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";
    const usersloggedIn = await fetch("https://dreamwebbackend.herokuapp.com/authentication/find", {
        credentials: "include",
        headers: {
            cookie: context1.req.cookies.token
        }
    });
    const user = await usersloggedIn.json();
    return {
        props: {
            posts: logged,
            merchant,
            user
        }
    };
}
const index = ({ posts , merchant , user  })=>{
    const { 0: order , 1: setOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: totalCart , 1: setTotalCart  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: reset , 1: setReset  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: factor , 1: setFactore  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: PAy , 1: seTpay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: rialsPay , 1: setrialsPay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { Api  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: read , 1: setRead  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: laws , 1: setLaws  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: agree , 1: setAgree  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: required , 1: setRequired  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: Auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const find = ()=>{
        setRequired(posts && posts[0].form.filter((res)=>res.required === true
        ));
    };
    const law = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${Api}/allRoutes/laws`, {
            withCredentials: true
        }).then((res)=>{
            if (res.data.lenght > 0) {
                setLaws(res.data[0].text);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        law();
        find();
    }, []);
    const pushOrder = (object)=>{
        setReset(false);
        const exist = order.find((res)=>res.title === object.title
        );
        if (exist) {
            setOrder(order.filter((item)=>item.title !== object.title
            ));
        }
        if (!exist) {
            var ref;
            setOrder([
                ...order,
                object
            ]);
            if (filter && ((ref = filter[0]) === null || ref === void 0 ? void 0 : ref.title) === object.title) {
                setErr(false);
            }
        }
    };
    const TotalPrice = ()=>{
        const total = order.reduce((sum, { price  })=>Number(sum) + Number(price)
        , 0);
        setTotalCart(total);
        setrialsPay(total && total + "0");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        TotalPrice();
        setFactore(true);
        setFilter(required.filter((x)=>!order.includes(x)
        ));
    }, [
        order
    ]);
    const checked = order.map((res)=>res.title
    );
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (reset === true) {
            setOrder([]);
            setCategory("");
        }
    }, [
        reset
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (category.length > 0) {
            const filterCategory = posts && posts[0].form.filter((res)=>{
                return res.categoryFirst.includes(category) || res.categorySecond.includes(category) || res.categoryThird.includes(category);
            });
            setOrder(filterCategory);
        }
    }, [
        category
    ]);
    const paying = async (e)=>{
        e.preventDefault();
        if (!user.username) {
            return setAuth(true);
        }
        if (filter.length > 0) {
            var ref;
            return setErr({
                errMessage: `انتخاب ${(ref = filter[0]) === null || ref === void 0 ? void 0 : ref.title} الزامی است !`
            });
        }
        if (order.length === 0) {
            return setErr({
                errMessage: "شما هیچ موردی را از جدول انتخاب نکرده اید !"
            });
        }
        if (agree === false) {
            return setErr({
                errMessage: "لطفا قوانین وبسایت را تایید کنید !"
            });
        }
        if (order.length > 0 && agree === true && filter.length <= 0) {
            const Post = {
                object: {
                    order
                },
                category: "exclusive",
                email: user.email,
                des: description,
                amount: parseInt(rialsPay / 2),
                description: `خرید وبسایت اختصاصی خانم/آقای ${user.username} ${user.number[0].family}`,
                callback_url: `http://localhost:3000/order/buyComplete/${rialsPay / 2}/`,
                merchant_id: merchant
            };
            await axios__WEBPACK_IMPORTED_MODULE_5___default().post(`${Api}/sell/pay`, Post, {
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
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/art.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "سفارش سایت اختصاصی -dreamWeb"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:locale",
                        content: "Fa_IR"
                    })
                ]
            }),
            read === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setRead(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            read && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            Auth && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: "1"
                },
                onClick: ()=>setAuth(null)
                ,
                id: "backDrop",
                children: "hello"
            }),
            Auth && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                style: {
                    zIndex: "151"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "لطفا برای خرید سایت اختصاصی خود وارد اکانت خود شوید !!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/Auth/Login",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        width: "120px",
                                        padding: "10px",
                                        margin: "5px",
                                        background: "#3f51b5"
                                    },
                                    children: " ورود به اکانت"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/Auth/SignUp",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        width: "120px",
                                        padding: "10px",
                                        margin: "5px",
                                        background: "#4caf50"
                                    },
                                    children: "ثبت نام"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "order-ex",
                children: [
                    PAy === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>seTpay(false)
                        ,
                        id: "backDrop",
                        children: "hello"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-ex",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/dreamWeb.png",
                                                alt: "dreamWeb Logo"
                                            }),
                                            " سفارش سایت اختصاصی  دریم وب "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "  در جدول زیر  شما میتوانید تمامی ویژگی ها و امکانات وبسایت خود را انتخاب نموده و هزینه آن به صورت آنلاین محاسبه میگردد ."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "تمامی وبسایت های اختصاصی در دریم وب به صورت 0 تا 100 توسط تیم دریم وب طراحی و ساخته میشوند و به همین دلیل کاملا قابل میتوانند دارای ویژگی های جدید و اختصاصی با توجه به ایده های کارفرما باشند ."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "head-order",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                                            children: "انتخاب خودکار ویژگی ها جهت سایت های زیر"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    checked: reset,
                                                    onClick: ()=>setReset(true)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "ریست"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    checked: category === "base",
                                                    onClick: ()=>setCategory("base")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "پایه اختصاصی"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    checked: category === "shop",
                                                    onClick: ()=>setCategory("shop")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "سایت اختصاصی فروشگاهی"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    checked: category === "company",
                                                    onClick: ()=>setCategory("company")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "سایت اختصاصی شرکتی"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
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
                                        children: posts && posts[0].form.map((res)=>{
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                style: checked.includes(res.title) ? {
                                                    background: "#b39cdb"
                                                } : null,
                                                onClick: ()=>pushOrder(res)
                                                ,
                                                className: "tr-news",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            type: "checkbox",
                                                            checked: checked.includes(res.title)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: res.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: res.des
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: res.type
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: res.price
                                                        })
                                                    })
                                                ]
                                            }));
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "header-ex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    onChange: (e)=>setDescription(e.target.value)
                                    ,
                                    placeholder: "توضیحات اضافی ..."
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "Pay-ex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "red"
                                        },
                                        children: "شرایط پرداخت قرارداد سایت اختصاصی دریم وب :"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "red"
                                        },
                                        children: "1:پرداخت 50% از مبلغ کل قرارداد به عنوان پیش پرداخت "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "red"
                                        },
                                        children: "2:پرداخت 50% از مبلغ کل قرارداد پس از تحویل طرح کد نویسی شده "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "green"
                                        },
                                        children: "پس از خرید تا 24 ساعت آینده برای شروع مراحل ساخت سایت شما با شما تماس خواهیم گرفت و قرارداد شما ارسال میشود!"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>setAgree((prev)=>!prev
                                            )
                                        ,
                                        style: {
                                            width: "99%",
                                            display: "flex",
                                            margin: "10px 0px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                checked: agree,
                                                type: "checkbox"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "قوانین وبسایت را مطالعه کردم و با آن موافقم .",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        style: {
                                                            cursor: "pointer",
                                                            color: "blueviolet",
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
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "payment",
                                style: {
                                    padding: "10px",
                                    marginTop: "20px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: {
                                        margin: "20px 0px"
                                    },
                                    children: [
                                        "مبلغ قابل پرداخت : ",
                                        totalCart / 2,
                                        " تومان "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: paying,
                                children: "پرداخت آنلاین"
                            })
                        ]
                    }),
                    factor && totalCart > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "factor-ex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                children: [
                                    "قیمت کل : ",
                                    totalCart,
                                    " تومان"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                children: [
                                    " قابل پرداخت : ",
                                    totalCart / 2,
                                    " تومان"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                children: [
                                    " تعداد آیتم های انتخابی : ",
                                    order.length
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                onClick: ()=>setFactore(false)
                                ,
                                src: "/images/cancel (1).png"
                            })
                        ]
                    }),
                    err && totalCart <= 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "20%",
                            height: "100px"
                        },
                        className: "factor-ex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                style: {
                                    marginTop: "5px",
                                    fontSize: "13px",
                                    width: "100%"
                                },
                                children: err.errMessage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    marginTop: "5px"
                                },
                                onClick: ()=>setErr(false)
                                ,
                                src: "/images/cancel (1).png"
                            })
                        ]
                    }),
                    err && !agree && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: totalCart > 0 ? {
                            width: "max-content",
                            height: "100px",
                            top: "63%"
                        } : {
                            width: "20%",
                            height: "100px"
                        },
                        className: "factor-ex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                style: {
                                    marginTop: "5px",
                                    fontSize: "13px",
                                    width: "100%"
                                },
                                children: err.errMessage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    marginTop: "5px"
                                },
                                onClick: ()=>setErr(false)
                                ,
                                src: "/images/cancel (1).png"
                            })
                        ]
                    }),
                    err && agree && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: totalCart > 0 ? {
                            width: "max-content",
                            height: "100px",
                            top: "63%"
                        } : {
                            width: "20%",
                            height: "100px"
                        },
                        className: "factor-ex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                style: {
                                    marginTop: "5px",
                                    fontSize: "13px",
                                    width: "100%"
                                },
                                children: err.errMessage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    marginTop: "5px"
                                },
                                onClick: ()=>setErr(false)
                                ,
                                src: "/images/cancel (1).png"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
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

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,7513,687], () => (__webpack_exec__(9767)));
module.exports = __webpack_exports__;

})();