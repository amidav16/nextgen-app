"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotFound = () => {
  return _react.default.createElement("div", {
    className: "notfound"
  }, _react.default.createElement("h3", null, "Not Found, this is just to display a different render"), _react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Go Back"));
};

var _default = NotFound;
exports.default = _default;