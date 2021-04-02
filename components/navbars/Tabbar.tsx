import Link from 'next/link';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Home, MessageCircle, ShoppingBag, User } from 'react-feather';

import AuthContext from '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';

Tabbar.propTypes = {
  page: PropTypes.string
};

Tabbar.defaultProps = {
  page: 'home'
};

const classes = {
  container: `
    fixed
    bg-bse
    bottom-0
    flex
    flex-nowrap
    flex-row
    md:hidden
    overflow-hidden
    rounded-t-2xl
    shadow
    w-full
    z-50
  `,

  tabItem: {
    container: `
      flex
      flex-1
      flex-col
      flex-nowrap
      font-bold
      h-16
      items-center
      justify-center
      relative
      transition-all
    `
  },

  bag: {
    itemsCounter: `
      absolute
      border-2
      border-bse
      flex
      flex-nowrap
      flex-row
      font-bold
      h-5
      items-center
      justify-center
      right-6
      rounded-full
      text-bse
      w-5
    `
  }
};

const styles = {
  bag: {
    itemsCounter: {
      fontSize: '0.75rem'
    }
  }
};

export enum TAB_PAGES {
  HOME = 'home',
  BAG = 'bag',
  USER = 'user',
  HELP = 'help'
};

export default function Tabbar({ page }: { page: TAB_PAGES }) {
  const { user } = useContext(AuthContext);
  const { countProducts } = useContext(OrderContext);
  const [activeItem, setActiveItem] = useState(page);

  return (
    <nav className={classes.container}>
      <Link href="/">
        <a
          onClick={() => setActiveItem(TAB_PAGES.HOME)}
          className={
            classes.tabItem.container +
            (activeItem === TAB_PAGES.HOME ? 'text-accent' : 'text-secondary')
          }
        >
          <Home />
          <span className={activeItem === TAB_PAGES.HOME ? '' : 'hidden'}>
            Inicio
          </span>
        </a>
      </Link>

      <Link href={user ? '/order' : '/auth'}>
        <a
          onClick={() => setActiveItem(TAB_PAGES.BAG)}
          className={
            classes.tabItem.container +
            (activeItem === TAB_PAGES.BAG ? 'text-accent' : 'text-secondary')
          }
        >
          <div
            className={
              classes.bag.itemsCounter +
              (activeItem === TAB_PAGES.BAG ? 'bg-accent top-1' : 'bg-secondary top-3')
            }
            style={styles.bag.itemsCounter}
          >
            {countProducts()}
          </div>
          <ShoppingBag />
          <span className={activeItem === TAB_PAGES.BAG ? '' : 'hidden'}>
            Bolsa
          </span>
        </a>
      </Link>

      <Link href={user ? '/user/profile' : '/auth'}>
        <a
          onClick={() => setActiveItem(TAB_PAGES.USER)}
          className={
            classes.tabItem.container +
            (activeItem === TAB_PAGES.USER ? 'text-accent' : 'text-secondary')
          }
        >
          <User />
          <span className={activeItem === TAB_PAGES.USER ? '' : 'hidden'}>
            Yo
          </span>
        </a>
      </Link>

      <Link href="/help">
        <a
          onClick={() => setActiveItem(TAB_PAGES.HELP)}
          className={
            classes.tabItem.container +
            (activeItem === TAB_PAGES.HELP ? 'text-accent' : 'text-secondary')
          }
        >
          <MessageCircle />
          <span className={activeItem === TAB_PAGES.HELP ? '' : 'hidden'}>
            Ayuda
          </span>
        </a>
      </Link>
    </nav>
  );
};
