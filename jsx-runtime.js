const flatten = (arr) =>
  arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );

function transformElement(element) {
  if (!element) return;

  switch (typeof element) {
    case 'string':
    case 'number':
      return document.createTextNode(element.toString());
    case 'function':
      return element();
    default:
      return element;
  }
}

const appendChildren = (element, children) => {
  const flattenChildren = Array.isArray(children)
    ? flatten(children)
    : [children];

  flattenChildren.forEach((child) => {
    if (child) {
      const transformChild = transformElement(child);
      element.appendChild(transformChild);
    }
  });

  return element;
};

export const jsx = (tag, { ref, children, ...props } = {}) => {
  if (typeof tag === 'string') {
    let element = document.createElement(tag);

    Object.keys(props).forEach((key) => {
      if (props[key]) {
        if (typeof props[key] === 'function') {
          element[key] = props[key];
        } else {
          element.setAttribute(key, props[key]);
        }
      }
    });

    if (children) {
      element = appendChildren(element, children);
    }

    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        element.setAttribute('ref', ref);
      }
    }

    return element;
  }
  if (typeof tag === 'function') {
    return tag({ ref, children, ...props });
  }
  throw new Error(`Invalid tag type: ${tag}`);
};

export const jsxs = jsx;


export const Fragment = ({ children } = {}) => {
  const element = document.createDocumentFragment();

  return appendChildren(element, children);
};


export const render = (element, selector) => {
  if (!element) return;

  const transformedElement = transformElement(element);

  if (!selector) {
    document.body.appendChild(transformedElement);
    return;
  }

  selector.appendChild(transformedElement);
};