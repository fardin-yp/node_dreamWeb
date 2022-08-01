"use strict";
exports.id = 7729;
exports.ids = [7729];
exports.modules = {

/***/ 7729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CKEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CKEditor({ setProperty  }) {
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: editorLoaded , 1: setEditorLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { CKEditor: CKEditor1 , ClassicEditor , ImageInsert  } = editorRef.current || {};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        editorRef.current = {
            // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
            CKEditor: (__webpack_require__(384).CKEditor),
            ClassicEditor: __webpack_require__(5614)
        };
        setEditorLoaded(true);
    }, []);
    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader)=>{
            return uploadImage(loader);
        };
    }
    return editorLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CKEditor1, {
        editor: ClassicEditor,
        data: "<p>Hello from CKEditor 5!</p>",
        onChange: (event, editor)=>{
            const data = editor.getData();
            setProperty(data);
        },
        config: {
            // plugins: [ Essentials ],
            ckfinder: {
                // The URL that the images are uploaded to.
                uploadUrl: 'https://dreamwebbackend.herokuapp.com/upload',
                // Enable the XMLHttpRequest.withCredentials property.
                withCredentials: true,
                // Headers sent along with the XMLHttpRequest to the upload server.
                headers: {
                    'X-CSRF-TOKEN': 'CSFR-Token',
                    Authorization: 'Bearer <JSON Web Token>'
                }
            }
        }
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Editor loading"
    });
};


/***/ })

};
;