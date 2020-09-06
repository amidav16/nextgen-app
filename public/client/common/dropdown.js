"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//default values, these can be passed with props so all dropdown buttons are unique
const DropDownMenu = ({
  DropdownName,
  Action = "Action",
  Action2 = "Another Action",
  Action3 = "Something else",
  ActionClick,
  ActionClick2,
  ActionClick3,
  ActionPage = "#/action-1",
  ActionPage2 = "#/action-2",
  ActionPage3 = "#/action-3",
  style
}) => {
  return _react.default.createElement(_reactBootstrap.Dropdown, null, _react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
    className: style,
    variant: "btn dropdown-toggle",
    id: "dropdown-basic"
  }, DropdownName), _react.default.createElement(_reactBootstrap.Dropdown.Menu, null, _react.default.createElement(_reactBootstrap.Dropdown.Item, {
    href: ActionPage,
    onClick: ActionClick
  }, Action), _react.default.createElement(_reactBootstrap.Dropdown.Item, {
    href: ActionPage2,
    onClick: ActionClick2
  }, Action2), _react.default.createElement(_reactBootstrap.Dropdown.Item, {
    href: ActionPage3,
    onClick: ActionClick3
  }, Action3)));
};

var _default = DropDownMenu;
exports.default = _default;