"use strict";
self["webpackHotUpdateweatherapp"]("main",{

/***/ "./src/components/WeatherForecastCard.tsx":
/*!************************************************!*\
  !*** ./src/components/WeatherForecastCard.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook */ "./src/hook.ts");
/* harmony import */ var _css_weatherStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/weatherStyle.css */ "./src/css/weatherStyle.css");



var WeatherForecastCard = function WeatherForecastCard() {
  var weatherForecastData = (0,_hook__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(function (state) {
    return state.weather.WeatherForecastData;
  });
  // const data = weatherForecastData[0]?.base;
  // console.log(data);
  console.log(weatherForecastData === null || weatherForecastData === void 0 ? void 0 : weatherForecastData.base);

  // let arr: WeatherDataProps = weatherForecastData;

  // const newArr = () => {
  //   console.log(arr.clouds); // Вывод весь массив
  //     console.log(arr[0]?.base); // Вывод base первого объекта
  // }

  // newArr();

  // weatherForecastData.map((elem) => {
  //   return console.log(elem);
  // })

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherForecastCard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dde6673d6f061cbb793e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTVkNjI5NC1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFLZTtBQUdSO0FBRWpDLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUEsRUFBUztFQUNoQyxJQUFNQyxtQkFBbUIsR0FBR0YscURBQWMsQ0FBQyxVQUFBRyxLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDQyxPQUFPLENBQUNDLG1CQUFtQjtFQUFBLEVBQUM7RUFDdEY7RUFDQTtFQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsbUJBQW1CLGFBQW5CQSxtQkFBbUIsdUJBQW5CQSxtQkFBbUIsQ0FBRU0sSUFBSSxDQUFDOztFQUd0Qzs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUEsb0JBQ0VULDBEQUFBLENBQUFBLHVEQUFBLE1BSUUsQ0FBQztBQUVQLENBQUM7QUFFRCwrREFBZUUsbUJBQW1COzs7Ozs7OztVQ3ZDbEMscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb21wb25lbnRzL1dlYXRoZXJGb3JlY2FzdENhcmQudHN4Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkVGl0bGVEYXRlIGZyb20gJy4vQ2FyZFRpdGxlRGF0ZSc7XHJcbmltcG9ydCBDYXJkTGVmdCBmcm9tICcuL0NhcmRMZWZ0L0NhcmRMZWZ0JztcclxuaW1wb3J0IENhcmRSaWdodCBmcm9tICcuL0NhcmRSaWdodC9DYXJkUmlnaHQnO1xyXG5cclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rJztcclxuaW1wb3J0IHsgV2VhdGhlckRhdGFQcm9wcyB9IGZyb20gJy4uL2NvbW1vblR5cGVzJztcclxuXHJcbmltcG9ydCAnLi4vY3NzL3dlYXRoZXJTdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgV2VhdGhlckZvcmVjYXN0Q2FyZCA9ICgpID0+IHtcclxuICBjb25zdCB3ZWF0aGVyRm9yZWNhc3REYXRhID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUud2VhdGhlci5XZWF0aGVyRm9yZWNhc3REYXRhKTtcclxuICAvLyBjb25zdCBkYXRhID0gd2VhdGhlckZvcmVjYXN0RGF0YVswXT8uYmFzZTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9yZWNhc3REYXRhPy5iYXNlKTtcclxuICBcclxuICBcclxuICAvLyBsZXQgYXJyOiBXZWF0aGVyRGF0YVByb3BzID0gd2VhdGhlckZvcmVjYXN0RGF0YTtcclxuXHJcbiAgLy8gY29uc3QgbmV3QXJyID0gKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coYXJyLmNsb3Vkcyk7IC8vINCS0YvQstC+0LQg0LLQtdGB0Ywg0LzQsNGB0YHQuNCyXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGFyclswXT8uYmFzZSk7IC8vINCS0YvQstC+0LQgYmFzZSDQv9C10YDQstC+0LPQviDQvtCx0YrQtdC60YLQsFxyXG4gIC8vIH1cclxuICBcclxuICAvLyBuZXdBcnIoKTtcclxuXHJcbiAgLy8gd2VhdGhlckZvcmVjYXN0RGF0YS5tYXAoKGVsZW0pID0+IHtcclxuICAvLyAgIHJldHVybiBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAvLyB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJGb3JlY2FzdENhcmQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImRkZTY2NzNkNmYwNjFjYmI3OTNlXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBcHBTZWxlY3RvciIsIldlYXRoZXJGb3JlY2FzdENhcmQiLCJ3ZWF0aGVyRm9yZWNhc3REYXRhIiwic3RhdGUiLCJ3ZWF0aGVyIiwiV2VhdGhlckZvcmVjYXN0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYXNlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==