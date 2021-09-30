"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Drawer;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.reduce.js");

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Drawer(_ref) {
  let {
    children,
    position,
    backgroundColor,
    height,
    width,
    offset
  } = _ref;
  const [showDrawer, setShowDrawer] = (0, _react.useState)(false);

  const HideButton = () => /*#__PURE__*/React.createElement(HideDrawerButton, {
    show: showDrawer,
    onClick: () => setShowDrawer(!showDrawer)
  }, {
    left: "▶",
    bottom: "▲",
    right: "◀",
    top: "▼"
  }[position]);

  return /*#__PURE__*/React.createElement(DrawerContainer, {
    position: position,
    backgroundColor: backgroundColor,
    height: height,
    width: width,
    offset: offset,
    show: showDrawer
  }, ["bottom", "right"].includes(position) && /*#__PURE__*/React.createElement(HideButton, null), /*#__PURE__*/React.createElement(DrawerContent, {
    width: width,
    height: height
  }, children), ["top", "left"].includes(position) && /*#__PURE__*/React.createElement(HideButton, null));
}

;

const DrawerContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    ", "\n    background-color: ", ";\n    display: flex;\n    flex-direction: ", ";\n    transition: all 0.25s ease;\n"])), _ref2 => {
  let {
    position,
    show,
    height,
    width,
    offset
  } = _ref2;
  const offsetStyle = Object.keys(offset || {}).reduce((finishedOffsetStyle, sideToOffset) => ["top", "bottom"].includes(position) && ["left", "right"].includes(sideToOffset) || ["left", "right"].includes(position) && ["top", "bottom"].includes(sideToOffset) ? "".concat(sideToOffset, ": ").concat(offset[sideToOffset], "; ").concat(finishedOffsetStyle) : finishedOffsetStyle, "");
  const positionRule = show ? "0" : "-".concat(["top", "bottom"].includes(position) ? height : width);

  switch (position) {
    case "top":
      return "\n                top: ".concat(positionRule, ";\n                width: ").concat(width ? "".concat(width, "; ").concat(offsetStyle.length && offsetStyle || "left: 50%; transform: translate( -50%, 0 );") : "100%;", "\n            ");

    case "left":
      return "\n                left: ".concat(positionRule, ";\n                height: ").concat(height ? "".concat(height, "; ").concat(offsetStyle.length && offsetStyle || "top: 50%; transform: translate( 0, -50% );") : "100%;", "\n            ");

    case "bottom":
      return "\n                bottom: ".concat(positionRule, ";\n                width: ").concat(width ? "".concat(width, "; ").concat(offsetStyle.length && offsetStyle || "left: 50%; transform: translate( -50%, 0 );") : "100%;", "\n            ");

    case "right":
      return "\n                right: ".concat(positionRule, ";\n                height: ").concat(height ? "".concat(height, "; ").concat(offsetStyle.length && offsetStyle || "top: 50%; transform: translate( 0, -50% );") : "100%;", "\n            ");

    default:
      return "";
  }
}, _ref3 => {
  let {
    backgroundColor
  } = _ref3;
  return backgroundColor || "inherit";
}, _ref4 => {
  let {
    position
  } = _ref4;
  return ["left", "right"].includes(position) ? "row" : "column";
});

const HideDrawerButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: none;\n    border: none;\n    min-height: 3vh;\n    transform: rotate( ", "deg );\n    transition: transform 0.25s ease;\n"])), _ref5 => {
  let {
    show
  } = _ref5;
  return show ? "180" : "0";
});

const DrawerContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    min-width: ", ";\n    min-height: ", ";\n    display: flex;\n    flex-direction: column;\n"])), _ref6 => {
  let {
    width
  } = _ref6;
  return width || "inherit";
}, _ref7 => {
  let {
    height
  } = _ref7;
  return height || "inherit";
});