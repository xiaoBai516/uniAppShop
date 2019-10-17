(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/commodity/commodity"],{

/***/ 119:
/*!******************************************************************************************!*\
  !*** E:/ylz_project/uni-app/uniAppDome/main.js?{"page":"pages%2Fcommodity%2Fcommodity"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _commodity = _interopRequireDefault(__webpack_require__(/*! ./pages/commodity/commodity.vue */ 120));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_commodity.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 120:
/*!***********************************************************************!*\
  !*** E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commodity_vue_vue_type_template_id_7974266c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commodity.vue?vue&type=template&id=7974266c& */ 121);
/* harmony import */ var _commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commodity.vue?vue&type=script&lang=js& */ 123);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commodity.vue?vue&type=style&index=0&lang=scss& */ 125);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);






/* normalize component */

var component = Object(_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _commodity_vue_vue_type_template_id_7974266c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _commodity_vue_vue_type_template_id_7974266c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 121:
/*!******************************************************************************************************!*\
  !*** E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue?vue&type=template&id=7974266c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_template_id_7974266c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./commodity.vue?vue&type=template&id=7974266c& */ 122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_template_id_7974266c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_template_id_7974266c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 122:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue?vue&type=template&id=7974266c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 123:
/*!************************************************************************************************!*\
  !*** E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./commodity.vue?vue&type=script&lang=js& */ 124);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 124:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var searchBox = function searchBox() {return __webpack_require__.e(/*! import() | components/searchTopBox */ "components/searchTopBox").then(__webpack_require__.bind(null, /*! @/components/searchTopBox */ 127));};var numberBox = function numberBox() {return __webpack_require__.e(/*! import() | components/uni-ui/numberBox/numberBox */ "components/uni-ui/numberBox/numberBox").then(__webpack_require__.bind(null, /*! @/components/uni-ui/numberBox/numberBox */ 197));};var _default =










































{
  components: {
    searchBox: searchBox,
    numberBox: numberBox },

  data: function data() {
    return {
      sizeCalcState: false,
      tabScrollTop: 0,
      currentId: 1,
      flist: [],
      slist: [],
      tlist: [] };

  },
  onLoad: function onLoad() {
    this.loadData();
  },
  methods: {
    loadData: function () {var _loadData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this2 = this;var list;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  this.$apiFn.asyncJson('cateList'));case 2:list = _context.sent;
                list.forEach(function (item) {
                  if (!item.pid) {
                    _this2.flist.push(item); //pid为父级id, 没有pid或者pid=0是一级分类
                  } else if (!item.picture) {
                    _this2.slist.push(item); //没有图的是2级分类
                  } else {
                    _this2.tlist.push(item); //3级分类
                  }
                });case 4:case "end":return _context.stop();}}}, _callee, this);}));function loadData() {return _loadData.apply(this, arguments);}return loadData;}(),

    //一级分类点击
    tabtap: function tabtap(item) {
      var _this = this;
      if (!this.sizeCalcState) {
        this.calcSize();
      }
      this.currentId = item.id;
      var index = this.slist.findIndex(function (sitem) {return sitem.pid === item.id;});
      setTimeout(function () {
        _this.tabScrollTop = _this.slist[index].top;
      }, 200);

    },
    //右侧栏滚动
    asideScroll: function asideScroll(e) {
      if (!this.sizeCalcState) {
        this.calcSize();
      }
      var scrollTop = e.detail.scrollTop;
      var tabs = this.slist.filter(function (item) {return item.top <= scrollTop;}).reverse();
      if (tabs.length > 0) {
        this.currentId = tabs[0].pid;
      }
    },
    //计算右侧栏每个tab的高度等信息
    calcSize: function calcSize() {
      var h = 0;
      this.slist.forEach(function (item) {
        var view = uni.createSelectorQuery().select("#main-" + item.id);
        view.fields({
          size: true },
        function (data) {
          item.top = h;
          h += data.height;
          item.bottom = h;
        }).exec();
      });
      this.sizeCalcState = true;
    },
    navToList: function navToList(sid, tid) {
      uni.navigateTo({
        url: "/pages/product/list?fid=".concat(this.currentId, "&sid=").concat(sid, "&tid=").concat(tid) });

    },
    //数量
    numberChange: function numberChange(data) {
      console.log('点击', data);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 125:
/*!*********************************************************************************************************!*\
  !*** E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./commodity.vue?vue&type=style&index=0&lang=scss& */ 126);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_commodity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 126:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/ylz_project/uni-app/uniAppDome/pages/commodity/commodity.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[119,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/commodity/commodity.js.map