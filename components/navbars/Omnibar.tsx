import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import logoImage from '@/assets/images/logo.svg';
import AuthContext from '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';
import { initializeApolloClient } from '@/lib/apollo-client';
import { getDepartments } from '@/actions/fetch-departments';
import IDepartment from '@/models/IDepartment';
import {Grid, Badge, AppBar, Button, makeStyles, Typography} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DrawerDeptos from './DrawerDeptops'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

Omnibar.propTypes = {
  menuEntries: PropTypes.array
};

Omnibar.defaultProps = {
  menuEntries: []
};

const useStyles = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer:{
    height: "3rem",
    width : "3rem"
  },
  img:{
    height: "100%",
    width : "100%"
  }
});

export default function Omnibar() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { order } = useContext(OrderContext);
  const [menuEntries, setMenuEntries] = useState<IDepartment[]>();
  const [open, setOpen] = useState(false)
  const colorIconUser = user ? "primary" : "default"

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
      background: "white",
      padding: "10px 20px"
    }}>
      <Grid container spacing={1}>
        <Grid item xs={2} className={classes.grid} >
          <a href="/" className={classes.imgContainer}>
            <img className={classes.img} src={logoImage} alt="Logo" />
          </a>
        </Grid>
        <Grid item xs={8} className={classes.grid} >
          <Button fullWidth onClick={()=>{setOpen(true)}}>
            <Typography variant="h6" color="primary">DEPARTAMENTOS</Typography>
            <KeyboardArrowDownIcon fontSize="large" color="primary"/>
          </Button>
          <DrawerDeptos open={open} setOpen={setOpen} departments={menuEntries}/>
        </Grid>
        <Grid item xs={1} className={classes.grid} >
          <IconButton href={user ? '/order' : '/auth'}>
            <Badge badgeContent={order.length} color="primary">
              <LocalMallIcon />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item xs={1} className={classes.grid} >
          <IconButton color={colorIconUser} href={user ? '/user/orders' : '/auth'}>
            <AccountCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};
