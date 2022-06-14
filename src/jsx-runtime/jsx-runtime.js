const flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
};

exports.jsxs = exports.jsx = (tag, { ref, children, ...props } = {}) => {
  if (typeof tag === 'string') {
    const element = document.createElement(tag);

    Object.keys(props).forEach((key) => {
      if (!props[key]) {
      } else if (typeof props[key] === 'function') {
        element[key] = props[key];
      } else {
        element.setAttribute(key, props[key]);
      }
    });

    if (children) {
      children = Array.isArray(children) ? flatten(children) : [children];

      children.forEach((child) => {
        if (child) {
          if (typeof child === 'string') {
            child = document.createTextNode(child);
          }
          element.appendChild(child);
        }
      });
    }

    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        element.setAttribute('ref', ref);
      }
    }

    return element;
  } else if (typeof tag === 'function') {
    return tag({ ref, children, ...props });
  } else {
    console.error('Invalid tag type', tag);
  }
};

exports.Fragment = ({ children } = {}) => {
  const element = document.createDocumentFragment();

  if (!children) {
  } else {
    children = Array.isArray(children) ? flatten(children) : [children];

    children.forEach((child) => {
      if (child) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        element.appendChild(child);
      }
    });
  }

  return element;
};
