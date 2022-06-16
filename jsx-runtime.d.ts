type Children =
  | Children[]
  | Node
  | boolean
  | number
  | string
  | null
  | undefined;

declare function flatten(arr: any[]): any[];
declare function transformElement(element: Element): any;
declare const appendChildren: (
  element: HTMLElement | DocumentFragment,
  children: Children
) => HTMLElement | DocumentFragment;
declare const jsx: <T extends keyof HTMLElementTagNameMap>(
  tag: T | ((arg0: { ref: any; children: Children }) => any),
  {
    ref,
    children,
    ...props
  }?: {
    ref: string | number | (() => any);
    children: Children;
  }
) => HTMLElementTagNameMap[T];
declare const render: (element: Element, selector: HTMLElement) => void;
