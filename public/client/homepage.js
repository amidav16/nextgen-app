"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _overview = _interopRequireDefault(require("./overview.jsx"));

var _sidebuttons = _interopRequireDefault(require("./sidebuttons.jsx"));

var _topmenu = _interopRequireDefault(require("./topmenu.jsx"));

var _linegraph = _interopRequireDefault(require("./linegraph.jsx"));

var _signupdata = _interopRequireDefault(require("./signupdata.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class HomePage extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      Signups: 648,
      Week: 12,
      Investment: 102,
      AvgInvestment: "345,565",
      Exits: 23
    };
  }

  render() {
    const {
      Signups,
      Week,
      Investment,
      AvgInvestment,
      Exits
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement(_overview.default, {
      Signups: Signups,
      Week: Week,
      Investment: Investment,
      AvgInvestment: AvgInvestment,
      Exits: Exits
    }), _react.default.createElement(_topmenu.default, null), _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement(_sidebuttons.default, null), _react.default.createElement(_linegraph.default, null), _react.default.createElement(_signupdata.default, null)));
  }

}

var _default = HomePage;
exports.default = _default;