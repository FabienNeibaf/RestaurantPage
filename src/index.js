import './index.scss';
import App from './App';
import { mount } from '../utils';

const tabCtrl = (() => {
  const handlers = [];
  const subscribe = handler => {
    handlers.push(handler);
  };
  const fire = e => {
    handlers.forEach(handler => handler(e));
  };
  return {
    fire,
    subscribe,
  };
})();

mount(App(tabCtrl), document.getElementById('content'));
