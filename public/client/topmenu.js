"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TopMenu = () => {
  return _react.default.createElement("div", {
    className: "topmenu"
  }, _react.default.createElement(_reactRouterDom.Link, {
    className: "topmenu-selected ",
    to: "/"
  }, "Signups"), _react.default.createElement(_reactRouterDom.Link, {
    className: "topmenu-divider",
    to: "/"
  }, "Investments"), _react.default.createElement(_reactRouterDom.Link, {
    className: "topmenu-divider",
    to: "/"
  }, "Revenue"), _react.default.createElement(_reactRouterDom.Link, {
    className: "topmenu-divider",
    to: "/"
  }, "Exits"), _react.default.createElement(_reactRouterDom.Link, {
    className: "topmenu-divider",
    to: "/"
  }, "Trades"), _react.default.createElement("div", {
    className: "grey-line"
  }));
};

var _default = TopMenu;
exports.default = _default;