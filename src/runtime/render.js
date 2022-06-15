const render = (element, selector) => {
  if (!element) {
    return;
  }

  if (!selector) {
    document.body.appendChild(element);
    return;
  }
  if (typeof element === 'string') {
    element = document.createTextNode(element);
  }
  if (typeof element === 'function') {
    element = element();
  }
  selector.appendChild(element);
};

export default render;
