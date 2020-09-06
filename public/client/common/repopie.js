"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _pie = require("@nivo/pie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RepoPie = ({
  pieData,
  totalValue
}) => {
  const margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  const styles = {
    root: {
      fontFamily: "Montserrat-medium",
      textAlign: "center",
      position: "relative",
      width: 600,
      height: 600
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: margin.right,
      bottom: 0,
      left: margin.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 36,
      fontFamily: "Montserrat-bold",
      color: "#cccccc",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none"
    }
  };
  const legends = [{
    anchor: "bottom",
    direction: "row",
    translateY: 56,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: "#999",
    symbolSize: 18,
    symbolShape: "circle",
    effects: [{
      on: "hover",
      style: {
        itemTextColor: "#000"
      }
    }]
  }];
  const chartColors = ["#1bfbe4", "#ff56ee"];
  return _react.default.createElement("div", {
    className: "pie-box"
  }, _react.default.createElement("span", {
    className: "pie-stats"
  }, "Total Signups"), _react.default.createElement("div", {
    className: "pie-stats2"
  }, _react.default.createElement("div", null, _react.default.createElement("span", null, "Individuals"), _react.default.createElement("span", {
    className: "space"
  }, "284"), _react.default.createElement("span", {
    className: "cyan-box"
  }, " ")), _react.default.createElement("div", {
    className: "topspace"
  }, _react.default.createElement("span", null, "Companies"), _react.default.createElement("span", {
    className: "space2"
  }, "364"), _react.default.createElement("span", {
    className: "pink-box"
  }))), _react.default.createElement("div", {
    className: "pie"
  }, _react.default.createElement(_pie.ResponsivePie, {
    data: pieData,
    margin: margin,
    sortByValue: true,
    innerRadius: 0.85,
    colors: chartColors,
    borderColor: {
      from: "color"
    },
    enableRadialLabels: false,
    radialLabelsSkipAngle: 15,
    radialLabelsTextXOffset: 6,
    radialLabelsTextColor: "#333333",
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsLinkColor: {
      from: "color"
    },
    enableSlicesLabels: false,
    slicesLabelsSkipAngle: 0,
    slicesLabelsTextColor: "#333333",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    legends: legends
  }), _react.default.createElement("div", {
    style: styles.overlay
  }, _react.default.createElement("span", null, totalValue))));
};

var _default = RepoPie;
exports.default = _default;