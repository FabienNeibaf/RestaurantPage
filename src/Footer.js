import { el } from '../utils';

const Footer = () => {
  return el('footer', null, [
    'Powered by ',
    el(
      'a',
      { href: 'https://github.com/FabienNeibaf', target: '_blank' },
      'Fabien',
    ),
  ]);
};

export default Footer;
