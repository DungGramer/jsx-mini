"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var dom = function dom(name, props) {
  var elem = document.createElement(name);
  Object.keys(props || {}).forEach(function (key) {
    if (key === "style") {
      Object.keys(props.style || {}).forEach(function (styleKey) {
        elem.style[styleKey] = props.style[styleKey];
      });
    } else {
      elem[key] = props[key];
    }
  });

  var addChild = function addChild(child) {
    if (Array.isArray(child)) {
      child.forEach(function (c) {
        return addChild(c);
      });
    } else if (_typeof(child) === "object") {
      elem.appendChild(child);
    } else {
      elem.appendChild(document.createTextNode(child));
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  (children || []).forEach(addChild);
  return elem;
};

document.getElementById("test").appendChild(dom("div", null, "Hello"));