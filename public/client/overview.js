"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dropdown = _interopRequireDefault(require("./common/dropdown.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OverView = ({
  Signups,
  Week,
  Investment,
  AvgInvestment,
  Exits
}) => {
  return _react.default.createElement("nav", {
    className: "navbar navbar-expand-lg overview"
  }, _react.default.createElement("ul", {
    className: "navbar-nav"
  }, _react.default.createElement("li", {
    className: "nav-item active"
  }, _react.default.createElement(_dropdown.default, {
    style: "overview-button",
    DropdownName: "Overview",
    Action: "Sort by date",
    Action2: "Sort by newest",
    Action3: "Sort by oldest"
  })), _react.default.createElement("li", {
    className: "overview-align"
  }, _react.default.createElement("div", {
    className: "overview-toptext"
  }, "Total signups"), _react.default.createElement("div", {
    className: "green overview-data"
  }, Signups)), _react.default.createElement("li", {
    className: "overview-align"
  }, _react.default.createElement("div", {
    className: "overview-toptext"
  }, "Last week"), _react.default.createElement("div", {
    className: "pink overview-data"
  }, Week)), _react.default.createElement("li", {
    className: "overview-align"
  }, _react.default.createElement("div", {
    className: "overview-toptext"
  }, "Total investments"), _react.default.createElement("div", {
    className: "cyan overview-data"
  }, Investment)), _react.default.createElement("li", {
    className: "overview-align"
  }, _react.default.createElement("div", {
    className: "overview-toptext"
  }, "Average investment"), _react.default.createElement("div", {
    className: "green overview-data"
  }, _react.default.createElement("span", {
    className: "green unbold"
  }, "NOK"), " ", AvgInvestment)), _react.default.createElement("li", {
    className: "overview-align"
  }, _react.default.createElement("div", {
    className: "overview-toptext"
  }, "Total exits"), _react.default.createElement("div", {
    className: "pink overview-data"
  }, Exits))));
};

var _default = OverView;
exports.default = _default;