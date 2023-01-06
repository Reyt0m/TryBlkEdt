"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Editor_js",{

/***/ "./plugins/nestTune.js":
/*!*****************************!*\
  !*** ./plugins/nestTune.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/**\n * Build styles\n */ \n(__webpack_require__(/*! ../styles/plugins.module.scss */ \"./styles/plugins.module.scss\").toString)();\n/**\n * node 作成用\n * @param tagName\n * @param classNames\n * @param attributes\n * @returns {*}\n */ function make(tagName) {\n    let classNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, attributes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};\n    const el = document.createElement(tagName);\n    if (Array.isArray(classNames)) {\n        el.classList.add(...classNames);\n    } else if (classNames) {\n        el.classList.add(classNames);\n    }\n    for(const attrName in attributes){\n        el[attrName] = attributes[attrName];\n    }\n    return el;\n}\nclass AlignmentBlockTune {\n    /**\n   * Default alignment\n   *\n   * @public\n   * @returns {string}\n   */ static get DEFAULT_ALIGNMENT() {\n        return \"left\";\n    }\n    static get isTune() {\n        return true;\n    }\n    getAlignment() {\n        var ref, ref1;\n        if (!!((ref = this.settings) === null || ref === void 0 ? void 0 : ref.blocks) && this.settings.blocks.hasOwnProperty(this.block.name)) {\n            return this.settings.blocks[this.block.name];\n        }\n        if (!!((ref1 = this.settings) === null || ref1 === void 0 ? void 0 : ref1.default)) {\n            return this.settings.default;\n        }\n        return AlignmentBlockTune.DEFAULT_ALIGNMENT;\n    }\n    /**\n   * block自体をwrapしてくれる\n   * constructorで与えられたalignmentを代入しようとすると、holderが確定してなく\n   * renderでやろうとすると、tuneを表示時に処理が走る\n   * @param blockContent\n   */ wrap(blockContent) {\n        this.wrapper = make(\"div\");\n        this.wrapper.classList.toggle(this._CSS.alignment[this.data.alignment]);\n        this.wrapper.append(blockContent);\n        return this.wrapper;\n    }\n    /**\n   * rendering block tune\n   * @returns {*}\n   */ render() {\n        const wrapper = make(\"div\");\n        const count = 1;\n        this.count = 0;\n        this.nestIcons.map((align)=>{\n            const button = document.createElement(\"button\");\n            button.classList.add(this.api.styles.settingsButton);\n            button.innerHTML = align.icon;\n            button.type = \"button\";\n            button.classList.toggle(this.api.styles.settingsButtonActive, align.name === this.data.alignment);\n            wrapper.appendChild(button);\n            return button;\n        }).forEach((element)=>{\n            element.addEventListener(\"click\", ()=>{\n                if (this.count > 0 && element.innerText === this.nestIcons[0].name) {\n                    this.count = this.count - count;\n                } else if (this.count < 5 && element.innerText === this.nestIcons[1].name) {\n                    this.count = this.count + count;\n                }\n                this.data = {\n                    alignment: this.nestSettings[this.count].name\n                };\n                const { name  } = this.nestSettings[this.count];\n                this.wrapper.className = \"\";\n                this.wrapper.classList.toggle(this._CSS.alignment[name], name === this.data.alignment);\n            });\n        });\n        console.log();\n        return wrapper;\n    }\n    /**\n   * save\n   * @returns {*}\n   */ save() {\n        return this.data;\n    }\n    /**\n   *\n   * @param api\n   * @param data 既に設定されているデータ\n   * @param settings tuneに設定項目\n   * @param block tuneに設定されてるblock\n   */ constructor({ api , data , config , block  }){\n        this.api = api;\n        this.block = block;\n        /**\n         config:{\n            default: \"right\",\n            blocks: {\n              header: 'center',\n              list: 'right'\n            }\n          },\n         */ this.settings = config;\n        this.data = data || {\n            alignment: this.getAlignment()\n        };\n        this.nestIcons = [\n            {\n                name: \"previous\",\n                icon: \"previous\"\n            },\n            {\n                name: \"next\",\n                icon: \"next\"\n            }\n        ];\n        this.nestSettings = [\n            {\n                name: \"1\",\n                icon: \"1\"\n            },\n            {\n                name: \"2\",\n                icon: \"2\"\n            },\n            {\n                name: \"3\",\n                icon: \"3\"\n            },\n            {\n                name: \"4\",\n                icon: \"4\"\n            },\n            {\n                name: \"5\",\n                icon: \"5\"\n            },\n            {\n                name: \"6\",\n                icon: \"6\"\n            }\n        ];\n        this._CSS = {\n            alignment: {\n                1: \"cdx-nest-1\",\n                2: \"cdx-nest-2\",\n                3: \"cdx-nest-3\",\n                4: \"cdx-nest-4\",\n                5: \"cdx-nest-5\",\n                6: \"cdx-nest-6\"\n            }\n        };\n    }\n}\nmodule.exports = AlignmentBlockTune;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtZQUFFRCxXQUFXLElBQUksQ0FBQ1osWUFBWTtRQUFHO1FBQ3JELElBQUksQ0FBQ2lCLFNBQVMsR0FBRztZQUNmO2dCQUNFWixNQUFNO2dCQUNOb0IsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VwQixNQUFNO2dCQUNOb0IsTUFBTTtZQUNSO1NBQ0Q7UUFDRCxJQUFJLENBQUNRLFlBQVksR0FBRztZQUNsQjtnQkFDRTVCLE1BQU07Z0JBQ05vQixNQUFNO1lBQ1I7WUFDQTtnQkFDRXBCLE1BQU07Z0JBQ05vQixNQUFNO1lBQ1I7WUFDQTtnQkFDRXBCLE1BQU07Z0JBQ05vQixNQUFNO1lBQ1I7WUFDQTtnQkFDRXBCLE1BQU07Z0JBQ05vQixNQUFNO1lBQ1I7WUFDQTtnQkFDRXBCLE1BQU07Z0JBQ05vQixNQUFNO1lBQ1I7WUFDQTtnQkFDRXBCLE1BQU07Z0JBQ05vQixNQUFNO1lBQ1I7U0FDRDtRQUNELElBQUksQ0FBQ2QsSUFBSSxHQUFHO1lBQ1ZDLFdBQVc7Z0JBQ1QsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7WUFDTDtRQUNGO0lBQ0Y7QUFtRUY7QUFFQTRCLE9BQU9DLE9BQU8sR0FBRzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsdWdpbnMvbmVzdFR1bmUuanM/YzdhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJ1aWxkIHN0eWxlc1xuICovXG5yZXF1aXJlKFwiLi4vc3R5bGVzL3BsdWdpbnMubW9kdWxlLnNjc3NcIikudG9TdHJpbmcoKTtcbi8qKlxuICogbm9kZSDkvZzmiJDnlKhcbiAqIEBwYXJhbSB0YWdOYW1lXG4gKiBAcGFyYW0gY2xhc3NOYW1lc1xuICogQHBhcmFtIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBtYWtlKHRhZ05hbWUsIGNsYXNzTmFtZXMgPSBudWxsLCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgfSBlbHNlIGlmIChjbGFzc05hbWVzKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgYXR0ck5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGVsW2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICB9XG4gIHJldHVybiBlbDtcbn1cblxuY2xhc3MgQWxpZ25tZW50QmxvY2tUdW5lIHtcbiAgLyoqXG4gICAqIERlZmF1bHQgYWxpZ25tZW50XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgREVGQVVMVF9BTElHTk1FTlQoKSB7XG4gICAgcmV0dXJuIFwibGVmdFwiO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc1R1bmUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRBbGlnbm1lbnQoKSB7XG4gICAgaWYgKFxuICAgICAgISF0aGlzLnNldHRpbmdzPy5ibG9ja3MgJiZcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmxvY2tzLmhhc093blByb3BlcnR5KHRoaXMuYmxvY2submFtZSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmJsb2Nrc1t0aGlzLmJsb2NrLm5hbWVdO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLnNldHRpbmdzPy5kZWZhdWx0KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5kZWZhdWx0O1xuICAgIH1cbiAgICByZXR1cm4gQWxpZ25tZW50QmxvY2tUdW5lLkRFRkFVTFRfQUxJR05NRU5UO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXBpXG4gICAqIEBwYXJhbSBkYXRhIOaXouOBq+ioreWumuOBleOCjOOBpuOBhOOCi+ODh+ODvOOCv1xuICAgKiBAcGFyYW0gc2V0dGluZ3MgdHVuZeOBq+ioreWumumgheebrlxuICAgKiBAcGFyYW0gYmxvY2sgdHVuZeOBq+ioreWumuOBleOCjOOBpuOCi2Jsb2NrXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGFwaSwgZGF0YSwgY29uZmlnLCBibG9jayB9KSB7XG4gICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgdGhpcy5ibG9jayA9IGJsb2NrO1xuICAgIC8qKlxuICAgICAgICAgY29uZmlnOntcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgIGJsb2Nrczoge1xuICAgICAgICAgICAgICBoZWFkZXI6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBsaXN0OiAncmlnaHQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICovXG4gICAgdGhpcy5zZXR0aW5ncyA9IGNvbmZpZztcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHsgYWxpZ25tZW50OiB0aGlzLmdldEFsaWdubWVudCgpIH07XG4gICAgdGhpcy5uZXN0SWNvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwicHJldmlvdXNcIixcbiAgICAgICAgaWNvbjogXCJwcmV2aW91c1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIm5leHRcIixcbiAgICAgICAgaWNvbjogXCJuZXh0XCJcbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMubmVzdFNldHRpbmdzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIjFcIixcbiAgICAgICAgaWNvbjogXCIxXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiMlwiLFxuICAgICAgICBpY29uOiBcIjJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCIzXCIsXG4gICAgICAgIGljb246IFwiM1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIjRcIixcbiAgICAgICAgaWNvbjogXCI0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiNVwiLFxuICAgICAgICBpY29uOiBcIjVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCI2XCIsXG4gICAgICAgIGljb246IFwiNlwiXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLl9DU1MgPSB7XG4gICAgICBhbGlnbm1lbnQ6IHtcbiAgICAgICAgMTogXCJjZHgtbmVzdC0xXCIsXG4gICAgICAgIDI6IFwiY2R4LW5lc3QtMlwiLFxuICAgICAgICAzOiBcImNkeC1uZXN0LTNcIixcbiAgICAgICAgNDogXCJjZHgtbmVzdC00XCIsXG4gICAgICAgIDU6IFwiY2R4LW5lc3QtNVwiLFxuICAgICAgICA2OiBcImNkeC1uZXN0LTZcIlxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogYmxvY2voh6rkvZPjgpJ3cmFw44GX44Gm44GP44KM44KLXG4gICAqIGNvbnN0cnVjdG9y44Gn5LiO44GI44KJ44KM44GfYWxpZ25tZW5044KS5Luj5YWl44GX44KI44GG44Go44GZ44KL44Go44CBaG9sZGVy44GM56K65a6a44GX44Gm44Gq44GPXG4gICAqIHJlbmRlcuOBp+OChOOCjeOBhuOBqOOBmeOCi+OBqOOAgXR1bmXjgpLooajnpLrmmYLjgavlh6bnkIbjgYzotbDjgotcbiAgICogQHBhcmFtIGJsb2NrQ29udGVudFxuICAgKi9cbiAgd3JhcChibG9ja0NvbnRlbnQpIHtcbiAgICB0aGlzLndyYXBwZXIgPSBtYWtlKFwiZGl2XCIpO1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuX0NTUy5hbGlnbm1lbnRbdGhpcy5kYXRhLmFsaWdubWVudF0pO1xuICAgIHRoaXMud3JhcHBlci5hcHBlbmQoYmxvY2tDb250ZW50KTtcbiAgICByZXR1cm4gdGhpcy53cmFwcGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlcmluZyBibG9jayB0dW5lXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtYWtlKFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvdW50ID0gMTtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm5lc3RJY29uc1xuICAgICAgLm1hcCgoYWxpZ24pID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5hcGkuc3R5bGVzLnNldHRpbmdzQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGFsaWduLmljb247XG4gICAgICAgIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICAgICAgdGhpcy5hcGkuc3R5bGVzLnNldHRpbmdzQnV0dG9uQWN0aXZlLFxuICAgICAgICAgIGFsaWduLm5hbWUgPT09IHRoaXMuZGF0YS5hbGlnbm1lbnRcbiAgICAgICAgKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jb3VudCA+IDAgJiYgZWxlbWVudC5pbm5lclRleHQgPT09IHRoaXMubmVzdEljb25zWzBdLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSB0aGlzLmNvdW50IC0gY291bnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHRoaXMuY291bnQgPCA1ICYmXG4gICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9PT0gdGhpcy5uZXN0SWNvbnNbMV0ubmFtZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgKyBjb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgYWxpZ25tZW50OiB0aGlzLm5lc3RTZXR0aW5nc1t0aGlzLmNvdW50XS5uYW1lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMubmVzdFNldHRpbmdzW3RoaXMuY291bnRdO1xuICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgICAgICAgdGhpcy5fQ1NTLmFsaWdubWVudFtuYW1lXSxcbiAgICAgICAgICAgIG5hbWUgPT09IHRoaXMuZGF0YS5hbGlnbm1lbnRcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXHQgIGNvbnNvbGUubG9nKClcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuICAvKipcbiAgICogc2F2ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHNhdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFsaWdubWVudEJsb2NrVHVuZTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidG9TdHJpbmciLCJtYWtlIiwidGFnTmFtZSIsImNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdHRyTmFtZSIsIkFsaWdubWVudEJsb2NrVHVuZSIsIkRFRkFVTFRfQUxJR05NRU5UIiwiaXNUdW5lIiwiZ2V0QWxpZ25tZW50Iiwic2V0dGluZ3MiLCJibG9ja3MiLCJoYXNPd25Qcm9wZXJ0eSIsImJsb2NrIiwibmFtZSIsImRlZmF1bHQiLCJ3cmFwIiwiYmxvY2tDb250ZW50Iiwid3JhcHBlciIsInRvZ2dsZSIsIl9DU1MiLCJhbGlnbm1lbnQiLCJkYXRhIiwiYXBwZW5kIiwicmVuZGVyIiwiY291bnQiLCJuZXN0SWNvbnMiLCJtYXAiLCJhbGlnbiIsImJ1dHRvbiIsImFwaSIsInN0eWxlcyIsInNldHRpbmdzQnV0dG9uIiwiaW5uZXJIVE1MIiwiaWNvbiIsInR5cGUiLCJzZXR0aW5nc0J1dHRvbkFjdGl2ZSIsImFwcGVuZENoaWxkIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJUZXh0IiwibmVzdFNldHRpbmdzIiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsInNhdmUiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/nestTune.js\n"));

/***/ })

});