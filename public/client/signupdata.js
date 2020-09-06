"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rest = _interopRequireDefault(require("./common/rest.jsx"));

var _repopie = _interopRequireDefault(require("./common/repopie.jsx"));

var _sortbar = _interopRequireDefault(require("./common/sortbar.jsx"));

var _meetings = _interopRequireDefault(require("./common/meetings.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SignupData extends _rest.default {
  constructor(props) {
    super(props);
    this.state = {
      totalvalue: 648,
      sortnum: 102,
      data: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchPieData();
  }

  render() {
    const {
      sortnum,
      data,
      totalvalue
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement(_repopie.default, {
      pieData: data,
      totalValue: totalvalue
    }), _react.default.createElement(_sortbar.default, {
      sortnum: sortnum
    }), _react.default.createElement(_meetings.default, null));
  }

}

var _default = SignupData;
exports.default = _default;