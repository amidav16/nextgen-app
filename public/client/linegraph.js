"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rest = _interopRequireDefault(require("./common/rest.jsx"));

var _repoline = _interopRequireDefault(require("./common/repoline.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LineGraph extends _rest.default {
  constructor(props) {
    super(props);

    this.selectData = id => {
      return this.state.data.filter(graph => graph.id === id);
    };

    this.state = {
      data: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchGraphData();
  }

  render() {
    const IndividualData = this.selectData(0);
    const CompanyData = this.selectData(1);
    return _react.default.createElement("div", null, _react.default.createElement(_repoline.default, {
      graphData: IndividualData,
      baseColor: "#1bfbe4",
      gradient: "#3e57c2",
      title: "Individuals",
      graphKey: "gradientA"
    }), _react.default.createElement(_repoline.default, {
      graphData: CompanyData,
      baseColor: "#ff56ee",
      gradient: "#3e57c2",
      title: "Companies",
      graphKey: "gradientB"
    }));
  }

}

var _default = LineGraph;
exports.default = _default;