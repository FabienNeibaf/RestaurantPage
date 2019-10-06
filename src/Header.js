import Tab from './Tab';
import { el } from '../utils';

const Header = tabCtrl => {
  return el('header', null, [
    el('h1', null, el('a', { href: '/' }, 'Veganoïde')),
    el('nav', null, Tab(tabCtrl)),
  ]);
};

export default Header;
