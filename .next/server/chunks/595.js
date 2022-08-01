"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);



const chart = ({ info , sells  })=>{
    const d = new Date();
    const year = d.getFullYear().toString();
    console.log(year);
    const filterSells = sells && sells.filter((res)=>res.year === year
    );
    const filterYear = info && info.filter((res)=>res.year === year
    );
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let onepast = months[d.getMonth()];
    let twoPast = months[d.getMonth() - 1];
    let threePast = months[d.getMonth() - 2];
    let fourPast = months[d.getMonth() - 3];
    let fifthPast = months[d.getMonth() - 4];
    let sixth = months[d.getMonth() - 5];
    let seventh = months[d.getMonth() - 6];
    let eight = months[d.getMonth() - 7];
    let ninth = months[d.getMonth() - 8];
    let ten = months[d.getMonth() - 9];
    let eleventh = months[d.getMonth() - 10];
    let twelve = months[d.getMonth() - 11];
    const getValue = (val)=>{
        return filterSells && filterSells.filter((res)=>res.month === val
        ).length;
    };
    const getview = (val)=>{
        return filterYear && filterYear.filter((res)=>res.month === val
        ).length;
    };
    let chartExample1 = {
        data: {
            labels: [
                sixth,
                fifthPast,
                fourPast,
                threePast,
                twoPast,
                onepast
            ],
            datasets: [
                {
                    label: 'تعداد بازدید ها (ماهیانه)',
                    data: [
                        ,
                        getview(sixth),
                        getview(fifthPast),
                        getview(fourPast),
                        getview(threePast),
                        getview(twoPast),
                        getview(onepast)
                    ],
                    backgroundColor: [
                        "#ddf0ff", 
                    ],
                    lineTension: 0.4,
                    fill: true,
                    pointRadius: 0
                }, 
            ]
        }
    };
    let chartExample2 = {
        data: {
            labels: [
                fifthPast,
                fourPast,
                threePast,
                twoPast,
                onepast
            ],
            datasets: [
                {
                    label: "Sales",
                    data: [
                        getValue(fifthPast),
                        getValue(fourPast),
                        getValue(threePast),
                        getValue(twoPast),
                        getValue(onepast)
                    ],
                    maxBarThickness: 5
                }, 
            ]
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "chart",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "Bar-chart",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "تعداد سفارشات"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {
                        data: chartExample2.data,
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                x: {
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    grid: {
                                        display: false
                                    }
                                }
                            },
                            backgroundColor: "#fb6240",
                            maintainAspectRatio: false
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "line-chart",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "تعداد بازدید"
                    }),
                    filterYear && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
                        data: chartExample1.data,
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chart);


/***/ })

};
;