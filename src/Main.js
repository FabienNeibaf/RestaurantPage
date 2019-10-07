import { el, mount } from '../utils';

const Main = tabCtrl => {
  const main = el('main');
  tabCtrl.subscribe(e => {
    mount(e.content, main);
  });
  return main;
};

export default Main;
