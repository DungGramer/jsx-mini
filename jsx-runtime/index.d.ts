declare function flatten(arr: any[]): any[];
declare function transformElement(element: Element): any;
declare const appendChildren: (
  element: HTMLElement | DocumentFragment,
  children: any
) => HTMLElement | DocumentFragment;
declare const jsx: (
  tag: string | ((arg0: { ref: any; children: any }) => any),
  {
    ref,
    children,
    ...props
  }?: {
    ref: string | number | (() => any);
    children: any;
  }
) => any;
declare const render: (element: Element, selector: HTMLElement) => void;
