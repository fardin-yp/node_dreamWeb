/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./helpers/context/authContext.js":
/*!****************************************!*\
  !*** ./helpers/context/authContext.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: userLoggedIn , 1: setUserLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: find , 1: setFind  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const Api = \"https://dreamweb0fardin.herokuapp.com/\";\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"ws://localhost:27017\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.current.on(\"getOnlineUsers\", (OnlineUsers)=>{\n            setUsers(OnlineUsers);\n        });\n    }, []);\n    console.log(users);\n    async function getUserLoggedIn() {\n        try {\n            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + \"authentication/loggedIn\", {\n                withCredentials: true\n            });\n            setUserLoggedIn(usersloggedIn.data);\n        } catch (err) {}\n    }\n    async function getUserinfo() {\n        try {\n            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + \"authentication/findUser\", {\n                withCredentials: true\n            });\n            setFind(usersloggedIn.data);\n        } catch (err) {}\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getSession() {\n            try {\n                await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + \"session\", {\n                    withCredentials: true\n                });\n            } catch (err) {}\n        }\n        getSession();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserLoggedIn();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserinfo();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            userLoggedIn,\n            getUserLoggedIn,\n            find,\n            Api,\n            users\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\FARDIN\\\\codes\\\\node-dream-web\\\\dreamWeb-frontend\\\\helpers\\\\context\\\\authContext.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2NvbnRleHQvYXV0aENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUMwQztBQUNsQztBQUVqQyxLQUFLLENBQUNNLFdBQVcsaUJBQUdMLG9EQUFhO0FBRXpCLEtBQUssQ0FBQ00sbUJBQW1CLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRWxELEtBQUssTUFBRUMsWUFBWSxNQUFHQyxlQUFlLE1BQUlQLCtDQUFRLENBQUMsS0FBSztJQUN2RCxLQUFLLE1BQUVRLElBQUksTUFBR0MsT0FBTyxNQUFJVCwrQ0FBUSxDQUFDLEtBQUs7SUFDdkMsS0FBSyxDQUFDVSxNQUFNLEdBQUdULDZDQUFNO0lBQ3JCLEtBQUssQ0FBQ1UsR0FBRyxHQUFHLENBQXlCO0lBQ3JDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUliLCtDQUFRLENBQUMsSUFBSTtJQUV2Q0QsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZXLE1BQU0sQ0FBQ0ksT0FBTyxHQUFHWiw0REFBRSxDQUFDLENBQXNCO0lBQzNDLENBQUMsRUFBRyxDQUFDLENBQUM7SUFFUEgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2RXLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxFQUFFLENBQUMsQ0FBZ0Isa0JBQUdDLFdBQVcsR0FBSSxDQUFDO1lBQ2xESCxRQUFRLENBQUNHLFdBQVc7UUFDdkIsQ0FBQztJQUNILENBQUMsRUFBQyxDQUFDLENBQUM7SUFDVEMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUs7bUJBQ0FPLGVBQWUsR0FBRyxDQUFDO1FBQzlCLEdBQUcsRUFBQztZQUNGLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQ3ZCLGdEQUFTLENBQUVjLEdBQUcsR0FBRyxDQUF5QiwwQkFBQyxDQUFDVztnQkFBQUEsZUFBZSxFQUFDLElBQUk7WUFBQSxDQUFDO1lBQzdGZixlQUFlLENBQUNhLGFBQWEsQ0FBQ0csSUFBSTtRQUNwQyxDQUFDLENBQUMsS0FBSyxFQUFDQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7bUJBRVlDLFdBQVcsR0FBRyxDQUFDO1FBQzlCLEdBQUcsRUFBQztZQUNKLEtBQUssQ0FBQ0wsYUFBYSxHQUFHLEtBQUssQ0FBQ3ZCLGdEQUFTLENBQUVjLEdBQUcsR0FBRyxDQUF5QiwwQkFBQyxDQUFDVztnQkFBQUEsZUFBZSxFQUFDLElBQUk7WUFBQSxDQUFDO1lBQzdGYixPQUFPLENBQUNXLGFBQWEsQ0FBQ0csSUFBSTtRQUMxQixDQUFDLENBQ0QsS0FBSyxFQUFDQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVIekIsZ0RBQVMsS0FBTyxDQUFDO3VCQUNBMkIsVUFBVSxHQUFHLENBQUM7WUFDM0IsR0FBRyxFQUFDO2dCQUNILEtBQUssQ0FBQzdCLGdEQUFTLENBQUVjLEdBQUcsR0FBRyxDQUFTLFVBQUMsQ0FBQ1c7b0JBQUFBLGVBQWUsRUFBQyxJQUFJO2dCQUFBLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEtBQUssRUFBQ0UsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7UUFDTEUsVUFBVTtJQUNWLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSjNCLGdEQUFTLEtBQU8sQ0FBQztRQUNmb0IsZUFBZTtJQUNqQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUpwQixnREFBUyxLQUFPLENBQUM7UUFDZjBCLFdBQVc7SUFDYixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBS0EsTUFBTSw2RUFDTHRCLFdBQVcsQ0FBQ3dCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ3RCLFlBQVk7WUFBRWEsZUFBZTtZQUFFWCxJQUFJO1lBQUdHLEdBQUc7WUFBRUMsS0FBSztRQUFBLENBQUM7a0JBQzVFUCxRQUFROzs7Ozs7QUFJaEIsQ0FBQztBQUVELGlFQUFlRixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItc2hvcC8uL2hlbHBlcnMvY29udGV4dC9hdXRoQ29udGV4dC5qcz9iODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgLCB1c2VFZmZlY3QsIHVzZVN0YXRlICx1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuIGV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXJMb2dnZWRJbiAsIHNldFVzZXJMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmluZCAsIHNldEZpbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBBcGkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MjcwMTcvXCJcclxuICAgIGNvbnN0IFt1c2VycyAsc2V0VXNlcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhcIndzOi8vbG9jYWxob3N0OjI3MDE3XCIpXHJcbiAgICAgfSAsIFtdKTtcclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwiZ2V0T25saW5lVXNlcnNcIiAsIE9ubGluZVVzZXJzID0+IHtcclxuICAgICAgICAgIHNldFVzZXJzKE9ubGluZVVzZXJzKVxyXG4gICAgICAgfSlcclxuICAgICB9LFtdKTtcclxuY29uc29sZS5sb2codXNlcnMpXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckxvZ2dlZEluKCkge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlcnNsb2dnZWRJbiA9IGF3YWl0IGF4aW9zLmdldCggQXBpICsgXCJhdXRoZW50aWNhdGlvbi9sb2dnZWRJblwiLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG4gICAgICAgIHNldFVzZXJMb2dnZWRJbih1c2Vyc2xvZ2dlZEluLmRhdGEpOyAgXHJcbiAgICAgIH0gY2F0Y2goZXJyKXt9XHJcbiAgICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJpbmZvKCkge1xyXG4gIHRyeXtcclxuICBjb25zdCB1c2Vyc2xvZ2dlZEluID0gYXdhaXQgYXhpb3MuZ2V0KCBBcGkgKyBcImF1dGhlbnRpY2F0aW9uL2ZpbmRVc2VyXCIse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgc2V0RmluZCh1c2Vyc2xvZ2dlZEluLmRhdGEpOyAgXHJcbiAgfVxyXG4gIGNhdGNoKGVycil7fVxyXG4gIH1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuICAgIHRyeXtcclxuICAgICBhd2FpdCBheGlvcy5nZXQoIEFwaSArIFwic2Vzc2lvblwiLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG4gICAgfSBjYXRjaChlcnIpe31cclxuICAgIH1cclxuZ2V0U2Vzc2lvbigpO1xyXG59LFtdKTtcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBnZXRVc2VyTG9nZ2VkSW4oKVxyXG59LFtdKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgZ2V0VXNlcmluZm8oKVxyXG59LFtdKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlckxvZ2dlZEluICxnZXRVc2VyTG9nZ2VkSW4gLGZpbmQgICxBcGkgLHVzZXJzfX0gPlxyXG4gICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICkgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJpbyIsIkF1dGhDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlckxvZ2dlZEluIiwic2V0VXNlckxvZ2dlZEluIiwiZmluZCIsInNldEZpbmQiLCJzb2NrZXQiLCJBcGkiLCJ1c2VycyIsInNldFVzZXJzIiwiY3VycmVudCIsIm9uIiwiT25saW5lVXNlcnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckxvZ2dlZEluIiwidXNlcnNsb2dnZWRJbiIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJlcnIiLCJnZXRVc2VyaW5mbyIsImdldFNlc3Npb24iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/context/authContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.css */ \"./styles/home.css\");\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_routes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/routes.css */ \"./styles/routes.css\");\n/* harmony import */ var _styles_routes_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_routes_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Admin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Admin.css */ \"./styles/Admin.css\");\n/* harmony import */ var _styles_Admin_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/context/authContext */ \"./helpers/context/authContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__]);\n_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\FARDIN\\\\codes\\\\node-dream-web\\\\dreamWeb-frontend\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\FARDIN\\\\codes\\\\node-dream-web\\\\dreamWeb-frontend\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNIO0FBQ0U7QUFDRDtBQUNLO0FBQ21DO1NBRzNEQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUFFSCw2RUFBbUI7OEZBQ2hCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRXBDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1zaG9wLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3JvdXRlcy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnRleHQvYXV0aENvbnRleHQnO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/Admin.css":
/*!**************************!*\
  !*** ./styles/Admin.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/home.css":
/*!*************************!*\
  !*** ./styles/home.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/routes.css":
/*!***************************!*\
  !*** ./styles/routes.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();