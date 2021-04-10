import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import formatPrice from '@/utils/format-price';

const OrderResumeTable = ({ order }) => {
  const [buySummary, setBuySummary] = useState(null);

  useEffect(() => {
    let summary = { subtotal: 0, delivery_price: 0, total: 0 };
    for (let i = 0; i < order.length; i++) {
      summary.subtotal += order[i].product.price * order[i].quantity;
    }
    summary.total = summary.subtotal + summary.delivery_price;
    setBuySummary(summary);
  }, [order]);

  return (
    <>
      {
        buySummary &&
        <table className="table-auto md:w-max md:justify-self-end">
          <thead>
            <tr>
              <th>Resumen de compra</th>
            </tr>
          </thead>

          <tbody className="border-b-2 border-t-2 border-inactive">
            <tr><td><br /></td></tr>
            <tr>
              <td>Subtotal</td>
              <td>{formatPrice('MXN',buySummary.subtotal)}</td>
            </tr>
            <tr><td><span></span></td></tr>
            <tr>
              <td>Envío</td>
              <td>{formatPrice('MXN', buySummary.delivery_price)}</td>
            </tr>
            <tr><td><br /></td></tr>
          </tbody>

          <tfoot className="md:font-bold">
            <tr>
              <td>Total</td>
              <td>{formatPrice('MXN', buySummary.total)}</td>
            </tr>
          </tfoot>
        </table >
      }
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
