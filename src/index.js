/** @jsx dom */

const dom = (name, props, ...children) => {
  const elem = document.createElement(name);
  Object.keys(props || {}).forEach((key) => {
    if (key === "style") {
      Object.keys(props.style || {}).forEach((styleKey) => {
        elem.style[styleKey] = props.style[styleKey];
      });
    } else {
      elem[key] = props[key];
    }
  });

  const addChild = (child) => {
    if (Array.isArray(child)) {
      child.forEach((c) => addChild(c));
    } else if (typeof child === "object") {
      elem.appendChild(child);
    } else {
      elem.appendChild(document.createTextNode(child));
    }
  };

  (children || []).forEach(addChild);

  return elem;
};

document.getElementById("test").appendChild(<div>Hello</div>);
