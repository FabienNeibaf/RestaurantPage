import { el, mount } from '../utils';

const Main = tab => {
  const main = el(
    'main',
    null,
    el('img', {
      src:
        'https://www.hotforfoodblog.com/wp-content/uploads/2019/01/ramenrolls_hotforfood_filtered2.jpg',
    }),
  );
  tab.subscribe(e => {
    mount(e.content, main);
  });
  return main;
};

export default Main;
