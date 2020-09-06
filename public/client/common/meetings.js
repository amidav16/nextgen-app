"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _meetingdata = _interopRequireDefault(require("./meetingdata.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Values here can be passed as props as well, but it's hardcoded for now
const Meetings = () => {
  return _react.default.createElement("div", {
    className: "meet-box"
  }, _react.default.createElement("div", {
    className: "meet-nav"
  }, _react.default.createElement("div", {
    className: "meet-title"
  }, "Latest Signups"), _react.default.createElement("div", {
    className: "meet-semititle"
  }, _react.default.createElement("div", {
    className: "left"
  }, "Name"), _react.default.createElement("div", {
    className: "right"
  }, "Scheduled Meeting"))), _react.default.createElement(_reactBootstrap.ListGroup, null, _react.default.createElement(_meetingdata.default, {
    name: "David Hansen",
    schedule: "02-03-2020 - 2PM",
    box: "cyan-box"
  }), _react.default.createElement(_meetingdata.default, {
    name: "Shopify",
    schedule: "05-03-2020 - 10:30AM",
    box: "pink-box2"
  }), _react.default.createElement(_meetingdata.default, {
    name: "Arvid, Realtree AB",
    schedule: "05-03-2020 - 3PM",
    box: "pink-box2"
  })));
};

var _default = Meetings;
exports.default = _default;