import { useContext } from 'react';
import OrderResumeTable from '@/components/tables/OrderResumeTable';
import OrderTable from '@/components/tables/OrderTable';
import AuthContex from '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';
import {Typography, Grid} from '@material-ui/core'

export default function OrderPage() {
  const { user, useSession } = useContext(AuthContex);

  const { order, removeProduct } = useContext(OrderContext);
  
  
  //const [order, setOrder] = useState([]);

  /*
  const getOrder = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) { }

    return [];
  };

  useEffect(()=>{
    setOrder(getOrder)
  },[])*/


  useSession();

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">BOLSA DE COMPRAS</Typography>
        </Grid>
        {order.length === 0 ?
          <Grid item xs={12}>
             <Typography variant="h5" align="center">Aún no tienes articulos en tu bolsa</Typography>
             <Typography variant="h5" align="center">Agrega algunos</Typography>
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
