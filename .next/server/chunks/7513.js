"use strict";
exports.id = 7513;
exports.ids = [7513];
exports.modules = {

/***/ 7513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const AuthContextProvider = ({ children  })=>{
    const { 0: userLoggedIn , 1: setUserLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: find , 1: setFind  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const Api = "https://dreamwebbackend.herokuapp.com/";
    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__["default"])("ws://dreamwebbackend.herokuapp.com/");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        socket.current.on("getOnlineUsers", (OnlineUsers)=>{
            setUsers(OnlineUsers);
        });
    }, []);
    console.log(users);
    async function getUserLoggedIn() {
        try {
            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + "/authentication/loggedIn", {
                withCredentials: true
            });
            setUserLoggedIn(usersloggedIn.data);
        } catch (err) {}
    }
    async function getUserinfo() {
        try {
            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + "/authentication/findUser", {
                withCredentials: true
            });
            setFind(usersloggedIn.data);
        } catch (err) {}
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function getSession() {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + "/session", {
                    withCredentials: true
                });
            } catch (err) {}
        }
        getSession();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getUserLoggedIn();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getUserinfo();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            userLoggedIn,
            getUserLoggedIn,
            find,
            Api,
            users
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;