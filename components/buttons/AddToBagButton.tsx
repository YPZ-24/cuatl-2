import PropTypes from 'prop-types';
import { ShoppingBag } from 'react-feather';
import IPaymentOrder from '@/models/IPaymentOrder';
import {useContext} from 'react'
import OrderContext from '@/context/OrderContext';

AddToBagButton.propTypes = {
  order: PropTypes.object
};

AddToBagButton.defaultProps = {
  order: null
};

const classes = {
  container: `
    bg-accent
    cursor-pointer
    flex
    flex-row
    flex-nowrap
    items-center
    hover:bg-inactive
    hover:text-primary
    justify-center
    font-bold
    px-4
    py-3
    rounded-lg
    text-bse
    shadow
  `
};

export default function AddToBagButton({ order }: { order: IPaymentOrder }) {

  const { addProductToBag } = useContext(OrderContext);

  const handlerClick = (event: any) => {
    event.preventDefault();
    const variantQuantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value);
    addProductToBag(variantQuantity, order)
  };

  return (
    <a onClick={(e) => handlerClick(e)} className={classes.container}>
      <span className="mr-3"><ShoppingBag /></span>
      <span>Añadir a la bolsa</span>
    </a>
  );
};



