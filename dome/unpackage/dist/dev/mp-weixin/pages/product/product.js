(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/product"],{

/***/ 111:
/*!***********************************************************************************!*\
  !*** E:/gitProjects/uniAppShop/dome/main.js?{"page":"pages%2Fproduct%2Fproduct"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _product = _interopRequireDefault(__webpack_require__(/*! ./pages/product/product.vue */ 112));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_product.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 112:
/*!****************************************************************!*\
  !*** E:/gitProjects/uniAppShop/dome/pages/product/product.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_3de58882___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=3de58882& */ 113);
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ 115);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&lang=scss& */ 117);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);






/* normalize component */

var component = Object(_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_3de58882___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_3de58882___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "gitProjects/uniAppShop/dome/pages/product/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 113:
/*!***********************************************************************************************!*\
  !*** E:/gitProjects/uniAppShop/dome/pages/product/product.vue?vue&type=template&id=3de58882& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3de58882___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./product.vue?vue&type=template&id=3de58882& */ 114);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3de58882___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3de58882___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 114:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/gitProjects/uniAppShop/dome/pages/product/product.vue?vue&type=template&id=3de58882& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 115:
/*!*****************************************************************************************!*\
  !*** E:/gitProjects/uniAppShop/dome/pages/product/product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./product.vue?vue&type=script&lang=js& */ 116);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 116:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/gitProjects/uniAppShop/dome/pages/product/product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var share = function share() {return __webpack_require__.e(/*! import() | components/share */ "components/share").then(__webpack_require__.bind(null, /*! @/components/share */ 205));};var _default =



















































































































































































{
  components: {
    share: share },

  data: function data() {
    return {
      specClass: 'none', //商品规则的弹出框是否显示
      specSelected: [], //选中规则的数据
      buyBool: false, //是否是立即购买按钮点击
      cartBool: false, //从加入购物车 按钮 点击弹出框选择时 不能跳转的判断
      favorite: true, //收藏的状态
      shareList: [], //分析的数据
      imgList: [
      {
        src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg' },

      {
        src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg' },

      {
        src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg' }],


      desc: "\n\t\t\t\t<div style=\"width:100%\">\n\t\t\t\t\t<img style=\"width:100%;display:block;\" src=\"https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg\" />\n\t\t\t\t\t<img style=\"width:100%;display:block;\" src=\"https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg\" />\n\t\t\t\t\t<img style=\"width:100%;display:block;\" src=\"https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg\" />\n\t\t\t\t\t<img style=\"width:100%;display:block;\" src=\"https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg\" />\n\t\t\t\t\t<img style=\"width:100%;display:block;\" src=\"https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg\" />\n\t\t\t\t</div>\n\t\t\t",








      specList: [
      {
        id: 1,
        name: '尺寸' },

      {
        id: 2,
        name: '颜色' }],


      specChildList: [
      {
        id: 1,
        pid: 1,
        name: 'XS' },

      {
        id: 2,
        pid: 1,
        name: 'S' },

      {
        id: 3,
        pid: 1,
        name: 'M' },

      {
        id: 4,
        pid: 1,
        name: 'L' },

      {
        id: 5,
        pid: 1,
        name: 'XL' },

      {
        id: 6,
        pid: 1,
        name: 'XXL' },

      {
        id: 7,
        pid: 2,
        name: '白色' },

      {
        id: 8,
        pid: 2,
        name: '珊瑚粉' },

      {
        id: 9,
        pid: 2,
        name: '草木绿' }] };



  },
  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {var _this = this;var id;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              //接收传值,id里面放的是标题，因为测试数据并没写id 
              id = options.id;
              if (id) {
                this.$apiFn.msg("\u70B9\u51FB\u4E86".concat(id));
              }


              //规格 默认选中第一条
              this.specList.forEach(function (item) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                  for (var _iterator = _this.specChildList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var cItem = _step.value;
                    if (cItem.pid === item.id) {
                      _this.$set(cItem, 'selected', true);
                      // this.specSelected.push(cItem);
                      break; //forEach不能使用break
                    }
                  }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
              });_context.next = 5;return (
                this.$apiFn.asyncJson('shareList'));case 5:this.shareList = _context.sent;case 6:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),

  methods: {
    //规格弹窗开关
    toggleSpec: function toggleSpec(el) {var _this2 = this;
      if (this.specClass === 'show') {
        this.specClass = 'hide';
        setTimeout(function () {
          _this2.specClass = 'none';
        }, 250);
        //立即购买按钮 选中后直接去购买
        if (this.buyBool === true && this.specSelected.length !== 0 && this.cartBool === false) {
          uni.navigateTo({
            url: "/pages/order/createOrder" });

        }
      } else if (this.specClass === 'none') {
        this.specClass = 'show';
        //是否 是加入购物车按钮 点进来的
        if (el === 'cart') {
          this.cartBool = true;
        }
      }
    },
    //选择规格
    selectSpec: function selectSpec(index, pid) {var _this3 = this;
      var list = this.specChildList;
      list.forEach(function (item) {
        if (item.pid === pid) {
          _this3.$set(item, 'selected', false);
        }
      });

      this.$set(list[index], 'selected', true);
      //存储已选择
      /**
       * 修复选择规格存储错误
       * 将这几行代码替换即可
       * 选择的规格存放在specSelected中
       */
      this.specSelected = [];
      list.forEach(function (item) {
        if (item.selected === true) {
          _this3.specSelected.push(item);
        }
      });

    },
    //分享
    share: function share() {
      this.$refs.share.toggleMask();
    },
    //收藏
    toFavorite: function toFavorite() {
      this.favorite = !this.favorite;
    },
    buy: function buy() {
      if (this.specSelected.length === 0) {
        this.buyBool = true;
        this.specClass = 'show';
      } else {
        uni.navigateTo({
          url: "/pages/order/createOrder" });

      }

    },
    stopPrevent: function stopPrevent() {} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 117:
/*!**************************************************************************************************!*\
  !*** E:/gitProjects/uniAppShop/dome/pages/product/product.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../SoftMgr/HBuilderX.1.9.3.20190422/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./product.vue?vue&type=style&index=0&lang=scss& */ 118);
/* harmony import */ var _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_SoftMgr_HBuilderX_1_9_3_20190422_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 118:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/gitProjects/uniAppShop/dome/pages/product/product.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[111,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/product.js.map