import Menu from './Menu';
import Contact from './Contact';
import { el } from '../utils';

const Tab = tabCtrl => {
  const menu = Menu();
  const contact = Contact();
  return el('ul', null, [
    el(
      'li',
      {
        onclick() {
          tabCtrl.fire({ content: menu });
        },
      },
      'Menu'
    ),
    el(
      'li',
      {
        onclick() {
          tabCtrl.fire({ content: contact });
        },
      },
      'Contact'
    ),
  ]);
};

export default Tab;
