import { el } from '../utils';

const Tab = tabCtrl => {
  return el('ul', null, [
    el(
      'li',
      {
        onclick() {
          tabCtrl.fire({ content: el('Anao zany') });
        },
      },
      'Menu',
    ),
    el(
      'li',
      {
        onclick() {
          tabCtrl.fire({ content: el('Akory zany') });
        },
      },
      'Contact',
    ),
  ]);
};

export default Tab;
