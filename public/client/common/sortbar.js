"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dropdown = _interopRequireDefault(require("./dropdown.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SortBar = ({
  sortnum
}) => {
  return _react.default.createElement("nav", {
    className: "navbar navbar-expand-lg sortbar dropdown-colors"
  }, _react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, _react.default.createElement("div", {
    className: "green-box"
  }), _react.default.createElement("span", null, "By Gender"), _react.default.createElement(_dropdown.default, {
    style: "dropdown-colors",
    DropdownName: "Female",
    Action: "Female",
    Action2: "Male",
    Action3: "Both"
  }), _react.default.createElement(_dropdown.default, {
    style: "dropdown-colors",
    DropdownName: "Individuals",
    Action: "Individuals",
    Action2: "Companies",
    Action3: "Both"
  }), _react.default.createElement("span", {
    className: "green"
  }, sortnum)));
};

var _default = SortBar;
exports.default = _default;