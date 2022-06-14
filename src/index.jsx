// import dom from './runtime/dom';
// import { createElement } from './runtime/dom';
import App from './app';
import render from './runtime/render';

// document.getElementById('test').append(App);

render(App, document.getElementById('test'));