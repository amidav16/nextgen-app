"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _logo = _interopRequireDefault(require("../assets/images/logo.png"));

var _avatar = _interopRequireDefault(require("../assets/images/avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//note that the time and date values be passed as props if desired
const NavBar = ({
  profileName,
  date,
  time
}) => {
  return _react.default.createElement("nav", {
    className: "navbar navbar-expand-lg"
  }, _react.default.createElement(_reactRouterDom.Link, {
    className: "navbar-brand",
    to: "/"
  }, _react.default.createElement("img", {
    className: "logo",
    src: _logo.default,
    alt: "Logo"
  })), _react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, _react.default.createElement("ul", {
    className: "navbar-nav"
  }, _react.default.createElement("li", {
    className: "nav-item active"
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link nav-color",
    to: "/home"
  }, "Account")), _react.default.createElement("li", {
    className: "nav-item"
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link nav-color",
    to: "/charts"
  }, "Charts")), _react.default.createElement("li", {
    className: "nav-item"
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link nav-color",
    to: "/help"
  }, "Help"))), _react.default.createElement("div", {
    className: "nav-container"
  }, _react.default.createElement("img", {
    className: "nav-icon",
    src: _avatar.default,
    alt: "Logo"
  }), _react.default.createElement("div", {
    className: "nav-greenbar"
  }, _react.default.createElement("ul", {
    className: "navbar-nav"
  }, _react.default.createElement("li", {
    className: "nav-item active"
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    className: "profilename nav-link",
    to: "/profile"
  }, profileName)), _react.default.createElement("li", {
    className: "nav-item nav-data"
  }, _react.default.createElement("div", {
    className: "date"
  }, date), _react.default.createElement("div", {
    className: "time"
  }, time)))))));
};

var _default = NavBar;
exports.default = _default;