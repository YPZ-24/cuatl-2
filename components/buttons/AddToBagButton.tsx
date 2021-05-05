import PropTypes from 'prop-types';
import { ShoppingBag } from 'react-feather';
import IPaymentOrder from '@/models/IPaymentOrder';
import {useContext} from 'react'
import OrderContext from '@/context/OrderContext';
import {useSnackbar} from 'notistack'
import {Button} from '@material-ui/core'

AddToBagButton.propTypes = {
  order: PropTypes.object
};

AddToBagButton.defaultProps = {
  order: null
}

export default function AddToBagButton({ order }: { order: IPaymentOrder }) {

  const { enqueueSnackbar } = useSnackbar();
  const { addProductToBag } = useContext(OrderContext);

  const handlerClick = (event: any) => {
    event.preventDefault();
    const variantQuantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value);
    addProductToBag(variantQuantity, order)
    enqueueSnackbar("Articulo agregado")
  };

  return (
    <Button onClick={(e) => handlerClick(e)} fullWidth variant="contained" color="primary">
      AÑADIR A LA BOLSA
    </Button>
  );
};



