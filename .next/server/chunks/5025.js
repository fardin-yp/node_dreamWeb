"use strict";
exports.id = 5025;
exports.ids = [5025];
exports.modules = {

/***/ 5025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ share_Share)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-share"
var external_next_share_ = __webpack_require__(8797);
;// CONCATENATED MODULE: ./helpers/share/share.png
/* harmony default export */ const share = ({"src":"/_next/static/media/share.402664df.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3KG9qAAAACXRSTlMBnlKFLPJvNifj4eD+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVQImWNgAAFGTiYwzc7JycjAwMTCzMjGyMHAzMkKEYYz4FIIxVDtABbgAKXOm2xEAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./helpers/share/Share.js





const Share = ({ title  })=>{
    const size = 40;
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setUrl(window.location.href) // Logs `http://localhost:3000/blog/incididunt-ut-lobare-et-dolore`
        ;
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: url && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "Share-Links",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            width: 25,
                            height: 25,
                            src: share,
                            alt: "share"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "به اشترک بگذارید"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.FacebookShareButton, {
                    url: url,
                    quote: title,
                    hashtag: '#nextshare',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.FacebookIcon, {
                        size: size,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.LinkedinShareButton, {
                    url: url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.LinkedinIcon, {
                        size: size,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.WhatsappShareButton, {
                    url: url,
                    title: title,
                    separator: ":: ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.WhatsappIcon, {
                        size: size,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.TwitterShareButton, {
                    url: url,
                    title: title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.TwitterIcon, {
                        size: size,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.EmailShareButton, {
                    url: url,
                    subject: title,
                    body: "body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.EmailIcon, {
                        size: size,
                        round: true
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const share_Share = (Share);


/***/ })

};
;