const flatten = (arr) =>
  arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );

function isHtmlTag(text) {
  return /^<?(figcaption|blockquote|textarea|template|progress|optgroup|noscript|menuitem|fieldset|datalist|colgroup|summary|section|details|caption|article|address|strong|source|select|script|output|option|object|legend|keygen|iframe|hgroup|header|footer|figure|dialog|canvas|button|video|track|title|thead|tfoot|tbody|table|style|small|param|meter|label|input|embed|audio|aside|time|span|samp|ruby|path|meta|menu|mark|main|link|html|head|form|data|code|cite|body|base|area|abbr|wbr|var|svg|sup|sub|rtc|pre|nav|map|kbd|ins|img|div|dfn|del|col|bdo|bdi|ul|tr|th|td|rt|rp|rb|ol|li|hr|h6|h5|h4|h3|h2|h1|em|dt|dl|dd|br|u|s|q|p|i|b|a)((:|::|,|\.|#|\[)[:$#{}()\w\-\[\]='",\.# +]*)?/.test(text);
}

const addTag = (tag) => {
  const svgRegex = /<svg(.*)>/;

  if (svgRegex.test(tag)) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = tag;
    return svg.children[0];
  } else {
    return document.createElement(tag);
  }
}

async function transformElement(element) {
  if (!element) return;

  if (element instanceof Promise) {
    return await element;
  };

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

  flattenChildren.forEach(async (child) => {
    if (child) {
      const transformChild = await transformElement(child);
      element.appendChild(transformChild);
    }
  });

  return element;
};

const jsx = (tag, { ref, children, ...props } = {}) => {
  if (typeof tag === 'string') {
    let element = addTag(tag);

    Object.keys(props).forEach((key) => {
      if (props[key]) {
        if (key === 'dangerouslySetInnerHTML') {
          element.innerHTML = props[key];
        } else if (typeof props[key] === 'function') {
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

const jsxs = jsx;


const Fragment = ({ children } = {}) => {
  const element = document.createDocumentFragment();

  return appendChildren(element, children);
};

const render = async (element, selector) => {
  if (!element) return;

  const transformedElement = await transformElement(element);

  if (!selector) {
    document.body.appendChild(transformedElement);
    return;
  }

  selector.appendChild(transformedElement);
};

export { jsx, jsxs, Fragment, render };