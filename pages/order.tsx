import { useContext } from 'react';
import OrderResumeTable from '@/components/tables/OrderResumeTable';
import OrderTable from '@/components/tables/OrderTable';
import OrderContext from '@/context/OrderContext';
import {Typography, Grid, Link} from '@material-ui/core'

export default function OrderPage() {
  const { order, removeProduct } = useContext(OrderContext);

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">BOLSA DE COMPRAS</Typography>
        </Grid>
        {order.length === 0 ?
          <Grid item xs={12}>
             <Typography variant="h5" align="center">Aún no tienes articulos en tu bolsa</Typography>
             <Link href="/">
              <Typography variant="h5" align="center">Agrega algunos</Typography>
             </Link>
          </Grid>
        :
         <>
          <Grid item xs={12} md={9}>
            <OrderTable order={order} removeProduct={removeProduct} />
          </Grid>
          <Grid item xs={12} md={3}>
            <OrderResumeTable order={order} />
          </Grid>
         </>
        }
      </Grid>
    </>
  );
};
