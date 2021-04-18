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
import {Grid, Badge, AppBar} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
    <AppBar position="static" style={{
      marginBottom: "20px",
      background: "white"
    }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.carving} style={styles.carving}></div>
        </Grid>
        <Grid item xs={2}>
          <a href="/" className={classes.logo.container}>
            <img className={classes.logo.image} src={logoImage} alt="Logo" />
          </a>
        </Grid>
        <Grid item xs={6}>
          <Dropdown
            label="Departamentos"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton href={user ? '/order' : '/auth'}>
            <Badge badgeContent={order.length} color="primary">
              <LocalMallIcon />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton href={user ? '/user/profile' : '/auth'}>
            <AccountCircleIcon/>
          </IconButton>
        </Grid>
        {
          isMenuVisible &&
          <div className={styles.tailwind.departmentsMenu.menuContainer}>
            <DepartmentsMenu departments={menuEntries} />
          </div>
        }
      </Grid>
    </AppBar>
  );
};
