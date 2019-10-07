import { el } from '../utils';

const items = [
  {
    img:
      'https://tacodelmar.com/wp-content/uploads/2016/12/16TDM001_MenuFeaturedImage_800x800_vegetarian-1.jpg',
    name: 'Delice',
  },
  {
    img:
      'https://www.lifewithoutmeat.com/wp-content/uploads/2019/07/chiquit-vegan-menu-main-header.jpg',
    name: 'Sweety',
  },
  {
    img:
      'https://www.veganblueberry.com/wp-content/uploads/2018/07/Vegan-Pepper-Jack-Cheese-32.jpg',
    name: 'Cheddar',
  },
  {
    img:
      'https://www.lifewithoutmeat.com/wp-content/uploads/2019/07/chiquit-vegan-menu-main-header.jpg',
    name: 'Sweety',
  },
  {
    img:
      'https://tacodelmar.com/wp-content/uploads/2016/12/16TDM001_MenuFeaturedImage_800x800_vegetarian-1.jpg',
    name: 'Delice',
  },
  {
    img:
      'https://www.veganblueberry.com/wp-content/uploads/2018/07/Vegan-Pepper-Jack-Cheese-32.jpg',
    name: 'Cheddar',
  },
];
const Menu = () =>
  el(
    'ul',
    { id: 'menu' },
    items.map(menu =>
      el('li', null, [el('img', { src: menu.img }), el('h3', null, menu.name)])
    )
  );

export default Menu;
