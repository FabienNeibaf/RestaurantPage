import { el } from '../utils';

const Contact = () =>
  el(
    'div',
    { id: 'contact' },
    el('div', null, [
      el('h2', null, 'Phone Number'),
      el('p', null, '+578ERDFAGAD'),
      el('h2', null, 'Address'),
      el('p', null, 'Dream Land, Vegan street, 5th square'),
    ])
  );

export default Contact;
