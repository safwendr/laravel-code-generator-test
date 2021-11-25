"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_app_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      listStrings: []
    };
  },
  methods: {
    addToListString: function addToListString() {
      var str = document.getElementById("str").value;
      console.log("str value", str);
      str = str.trim();
      this.listStrings.push(str);
      console.log("list string value", this.listStrings);
      document.getElementById("str").value = "";
      localStorage["mylist"] = JSON.stringify(this.listStrings);
    },
    removeFromListString: function removeFromListString(event) {
      console.log("element to remove", event.target.parentElement.innerText);
      var elValue = event.target.parentElement.innerText;
      elValue = elValue.trim();

      var valueExist = function valueExist(element) {
        return element == elValue;
      };

      console.log("value to remove:", elValue, "type of:", _typeof(elValue)); //   let filteredArr = this.listStrings.filter(function (str) {
      //     console.log("elvalue here:", elValue);
      //     return str === elValue;
      //   });

      var index = this.listStrings.findIndex(valueExist);
      console.log('index found', index); //   console.log("filtered Arr", filteredArr);
      //   this.listStrings = filteredArr;

      localStorage["mylist"] = JSON.stringify(this.listStrings);
    },
    convertToQRCodes: function convertToQRCodes() {//
    }
  }
});

/***/ }),

/***/ "./resources/js/components/app.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/app.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=f9a0fcb4& */ "./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./resources/js/components/app.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.render,
  _app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/app.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f9a0fcb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./app.vue?vue&type=template&id=f9a0fcb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app.vue?vue&type=template&id=f9a0fcb4& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card m-4", staticStyle: { width: "18rem" } }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [_vm._v("Enter you strings:")]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-primary mb-2",
            attrs: { href: "#" },
            on: {
              click: function ($event) {
                return _vm.addToListString()
              },
            },
          },
          [_vm._v("Add to list")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(
            "\n        Note: Your strings will be converted to QR Codes as png images.\n      "
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card m-4", staticStyle: { width: "18rem" } }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v("List of strings to convert to QR Codes:"),
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.listStrings, function (item) {
            return _c("li", { key: item, staticClass: "list-group-item" }, [
              _c("div", { staticClass: "chip" }, [
                _vm._v("\n            " + _vm._s(item) + "\n            "),
                _c(
                  "span",
                  {
                    staticClass: "closebtn",
                    on: {
                      click: function ($event) {
                        return _vm.removeFromListString($event)
                      },
                    },
                  },
                  [_vm._v("×")]
                ),
              ]),
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-primary mb-2",
            attrs: { href: "#" },
            on: {
              click: function ($event) {
                return _vm.convertToQRCodes()
              },
            },
          },
          [_vm._v("Convert all strings to QR Codes")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "navbar main-navbar" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("span", { staticClass: "navbar-brand mb-0 h1 text-light" }, [
          _vm._v("QR Code Generator"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group mb-3" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          id: "str",
          type: "text",
          placeholder: "Enter string",
          "aria-label": "Recipient's username",
          "aria-describedby": "basic-addon2",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);