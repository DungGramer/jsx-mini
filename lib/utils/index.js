"use strict";

var camelcaseToDashed = function camelcaseToDashed(string) {
  return string.replace(/[A-Z]/g, function (c) {
    return "-".concat(c.toLowerCase());
  });
};

var styleObjectToString = function styleObjectToString(styleObject) {
  if (typeof styleObject === "string") {
    return styleObject;
  }

  return Object.keys(styleObject).map(function (propName) {
    return "".concat(camelcaseToDashed(propName), ":").concat(styleObject[propName]);
  }).join(";");
};