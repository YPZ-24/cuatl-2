import PropTypes from 'prop-types';
import { ShoppingBag } from 'react-feather';

import IPaymentOrder from '@/models/IPaymentOrder';

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
  const setOrder = (activeOrder: Array<IPaymentOrder>) => {
    localStorage.setItem('order', JSON.stringify(activeOrder));
  };

  const getOrder = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) { }

    return [];
  };

  const addProductToBag = (event: any) => {
    event.preventDefault();

    const activeOrder = getOrder();
    const quantitySelector = document.getElementById('quantity') as HTMLInputElement;
    const variantQuantity = parseInt(quantitySelector.value);

    //: if the product and variant is already there
    const indexOfOrderItem = activeOrder.findIndex((orderItem: IPaymentOrder) => orderItem.variant.id === order.variant.id);

    if (indexOfOrderItem !== -1) {
      //: update quantity
      const currentQuantity = activeOrder[indexOfOrderItem].quantity;
      if (currentQuantity + variantQuantity <= order.variant.stock) {
        activeOrder[indexOfOrderItem].quantity = currentQuantity + variantQuantity;
      }
    } else {
      activeOrder.push({
        product: order.product,
        variant: order.variant,
        quantity: variantQuantity,
        offers: order.offers
      });
    }

    setOrder(activeOrder);
  };

  return (
    <a onClick={(e) => addProductToBag(e)} className={classes.container}>
      <span className="mr-3"><ShoppingBag /></span>
      <span>Añadir a la bolsa</span>
    </a>
  );
};



