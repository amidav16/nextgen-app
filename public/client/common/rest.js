"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

class rest extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  //All rest api codes are located here, techincally back-end related
  //Fetch Graph Data
  async fetchGraphData() {
    const url = "/api/graph/data";
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      console.log("Error fetching data");
      this.setState({
        data: null
      });
      return;
    }

    if (response.status === 200) {
      this.setState({
        data: payload
      });
    } else {
      console.log("Issue with http connection");
    }
  } //Fetch Pie Data


  async fetchPieData() {
    const url = "/api/pie/data";
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      console.log("Error fetching data");
      this.setState({
        data: null
      });
      return;
    }

    if (response.status === 200) {
      this.setState({
        data: payload
      });
    } else {
      console.log("Issue with http connection");
    }
  }

}

var _default = rest;
exports.default = _default;