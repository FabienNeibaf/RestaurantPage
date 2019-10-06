import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { el } from '../utils';

const App = tabCtrl => {
  return el('section', { id: 'app' }, [
    Header(tabCtrl),
    Main(tabCtrl),
    Footer(),
  ]);
};

export default App;
