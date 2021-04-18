import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import formatPrice from '@/utils/format-price';
import {Typography} from '@material-ui/core'
import PaymentButton from '../buttons/PaymentButton';

const OrderResumeTable = ({ order }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let subTotal = 0
    for (let i = 0; i < order.length; i++) {
      subTotal += order[i].product.price * order[i].quantity;
    }
    setTotal(subTotal)
  }, [order]);

  return (
    <>
      <Typography variant="h5" align="center">TOTAL</Typography>
      <Typography variant="h6" align="center">{formatPrice('MXN',total)}</Typography>
      <PaymentButton />
    </>
  );
};

OrderResumeTable.propTypes = {
  order: PropTypes.array
};

OrderResumeTable.defaultProps = {
  order: []
};

export default OrderResumeTable;
