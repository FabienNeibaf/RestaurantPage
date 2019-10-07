import Tab from './Tab';
import Main from './Main';
import { el } from '../utils';

const App = tabCtrl => {
  return el('section', { id: 'app' }, [
    el('header', null, [
      el('h1', null, 'Veganerse'),
      el('nav', null, Tab(tabCtrl)),
    ]),
    Main(tabCtrl),
    el('footer', null, [
      'Powered by ',
      el(
        'a',
        { href: 'https://github.com/FabienNeibaf', target: '_blank' },
        'Fabien'
      ),
    ]),
  ]);
};

export default App;
