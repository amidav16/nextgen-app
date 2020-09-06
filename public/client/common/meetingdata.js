"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MeetingData = ({
  name,
  schedule,
  box
}) => {
  return _react.default.createElement(_reactBootstrap.ListGroup.Item, {
    className: "listItem"
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: box + " left"
  }), _react.default.createElement("span", {
    className: "left"
  }, name), _react.default.createElement("span", {
    className: "right"
  }, schedule)));
};

var _default = MeetingData;
exports.default = _default;