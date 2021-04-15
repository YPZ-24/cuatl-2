import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { MoreHorizontal, MoreVertical, ShoppingBag } from 'react-feather';

import carvingImage from '@/assets/images/frame.svg';
import logoImage from '@/assets/images/logo.svg';
import CircleAvatar from '@/components/avatars/CircleAvatar';
import OutlineButton from '@/components/buttons/OutlineButton';
import Dropdown from '@/components/dropdowns/Dropdown';
import DepartmentsMenu from '@/components/menus/DepartmentsMenu';
import AuthContext from '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';
import { initializeApolloClient } from '@/lib/apollo-client';
import { getDepartments } from '@/actions/fetch-departments';
import IDepartment from '@/models/IDepartment';

Omnibar.propTypes = {
  menuEntries: PropTypes.array
};

Omnibar.defaultProps = {
  menuEntries: []
};

const classes = {
  carving: `
    bg-repeat-x
    h-8
    w-full
  `,

  container: `
    bg-bse
    flex
    flex-col
    flex-nowrap
    h-24
    md:h-28
    relative
    shadow
    w-full
    z-50
  `,

  departments: {
    container: `
      cursor-pointer
      flex
      flex-row
      flex-nowrap
      items-center
    `,
    menu: `
      absolute
      max-h-1/2
      w-full
      z-40
    `
  },

  linkGroup: {
    bag: {
      container: `
        hidden
        md:flex
        md:flex-row
        md:flex-nowrap
        md:items-center
        md:justify-center
        md:h-12
        md:relative
        md:w-12
      `,
      itemsCounter: `
        absolute
        bg-accent
        border-2
        border-bse
        flex
        flex-row
        flex-nowrap
        font-bold
        h-5
        items-center
        justify-center
        right-1
        rounded-full
        text-bse
        top-1
        w-5
      `
    },
    container: `
      flex
      flex-row
      flex-nowrap
      items-center
      justify-end
      w-1/3
    `,
    user: {
      container: `
        hidden
        md:cursor-pointer
        md:inline-block
        md:ml-4
      `
    }
  },

  logo: {
    container: `
      flex
      flex-row
      flex-nowrap
      h-12
      justify-start
      w-1/3
    `,
    image: `
      max-h-full
      max-w-full
    `,
  },

  navbar: `
    flex
    flex-1
    flex-row
    flex-nowrap
    items-center
    justify-between
    px-7
  `
};

const styles = {
  carving: {
    backgroundImage: `url('${carvingImage}')`
  },
  itemsCounter: {
    fontSize: '0.75rem'
  },
  tailwind: {
    departmentsMenu: {
      menuContainer: `
        absolute
        max-h-1/2
        overflow-y-scroll
        top-24
        w-full
        z-40
      `
    }
  }
};

export default function Omnibar() {
  const { user } = useContext(AuthContext);
  const { order } = useContext(OrderContext);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [menuEntries, setMenuEntries] = useState<IDepartment[]>();

  async function getDeptos(){
    const apolloClient = initializeApolloClient();
    const mEntries = await getDepartments(apolloClient);
    setMenuEntries(mEntries)
  }

  useEffect(()=>{
    getDeptos()
  })

  return (
    <>
      <div className={classes.container}>
        <div className={classes.carving} style={styles.carving}></div>

        <nav className={classes.navbar}>
          <a href="/" className={classes.logo.container}>
            <img className={classes.logo.image} src={logoImage} alt="Logo" />
          </a>

          <div className={classes.departments.container}>
            <div className="hidden md:block">
              <Dropdown
                label="Departamentos"
                onClick={() => setIsMenuVisible(!isMenuVisible)}
              />
            </div>
          </div>

          <div className={classes.linkGroup.container}>
            <div
              className="md:hidden"
              onClick={() => setIsMenuVisible(!isMenuVisible)}>
              {
                isMenuVisible
                  ? <MoreHorizontal />
                  : <MoreVertical />
              }
            </div>

            <a
              href={user ? '/order' : '/auth'}
              className={classes.linkGroup.bag.container}
            >
              <ShoppingBag />
              <div
                className={classes.linkGroup.bag.itemsCounter}
                style={styles.itemsCounter}
              >
                {order.length}
              </div>
            </a>

            <a
              href={user ? '/user/profile' : '/auth'}
              className={classes.linkGroup.user.container}
            >
              {
                user
                  ? <CircleAvatar avatar={user.avatar} size="8" />
                  : <OutlineButton label="Regístrate o ingresa" />
              }
            </a>
          </div>
        </nav>
      </div>

      {
        isMenuVisible &&
        <div className={styles.tailwind.departmentsMenu.menuContainer}>
          <DepartmentsMenu departments={menuEntries} />
        </div>
      }
    </>
  );
};
