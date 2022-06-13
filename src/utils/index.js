const camelcaseToDashed = (string) =>
  string.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

const styleObjectToString = (styleObject) => {
  if (typeof styleObject === "string") {
    return styleObject;
  }

  return Object.keys(styleObject)
    .map(
      (propName) => `${camelcaseToDashed(propName)}:${styleObject[propName]}`
    )
    .join(";");
};
