"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _notfound = _interopRequireDefault(require("./common/notfound.jsx"));

var _homepage = _interopRequireDefault(require("./homepage.jsx"));

var _navbar = _interopRequireDefault(require("./navbar.jsx"));

require("bootstrap/dist/css/bootstrap.css");

require("../../public/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//we could fetch the name from the state here and append it depending on if theyre logged inn!
class App extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "Elsa Andersen",
      date: "17-02-2020",
      time: "2.45 PM"
    };
  }

  render() {
    const {
      name,
      date,
      time
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement(_navbar.default, {
      profileName: name,
      date: date,
      time: time
    }), _react.default.createElement("div", {
      className: "nav-greenline"
    }), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
      path: "/home",
      component: _homepage.default
    }), _react.default.createElement(_reactRouterDom.Route, {
      path: "/not-found",
      component: _notfound.default
    }), _react.default.createElement(_reactRouterDom.Redirect, {
      from: "/",
      exact: true,
      to: "/home"
    }), _react.default.createElement(_reactRouterDom.Redirect, {
      to: "/not-found"
    }))));
  }

}

_reactDom.default.render(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(App, null)), document.getElementById("root"));