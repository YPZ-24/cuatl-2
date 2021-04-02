import PropTypes from 'prop-types';
import { X } from 'react-feather';

import colors from '@/data/colors.json';
import getMediaSource from '@/utils/get-media-source';

const OrderTable = ({ order }) => {
  const removeProduct = (itemNumber) => {
    const activeOrder = getOrder();
    const _ = activeOrder.splice(itemNumber, 1);

    setLSOrder(activeOrder);
    setOrder(getOrder());
  };

  return (
    <table className="table-auto md:w-full md:text-center">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Quitar</th>
        </tr>
      </thead>

      <tbody>
        {
          order.map((orderItem, itemNumber) => (
            <tr key={itemNumber} className="border-t-2 border-inactive">
              <td>
                <div
                  className="w-12 h-12 rounded-full overflow-hidden md:m-auto"
                >
                  <img
                    src={getMediaSource(orderItem.product.cover)}
                    alt={orderItem.product.name}
                    className="object-center"
                  />
                </div>
              </td>

              <td>
                <div
                  style={{
                    backgroundColor: colors[orderItem.variant.color.trim().toLowerCase()]
                  }}
                  className="h-3 w-3 rounded-full inline-block"
                >
                </div>
                <span className="text-secondary mx-2">/</span>
                <span>{orderItem.variant.size}</span>
                <span className="text-secondary mx-2">/</span>
                <span>{orderItem.variant.pattern}</span>
              </td>

              <td>{orderItem.quantity}</td>

              <td>{orderItem.product.price}</td>

              <td>
                <button>
                  <X />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

OrderTable.propTypes = {
  order: PropTypes.array
};

OrderTable.defaultProps = {
  order: []
};

export default OrderTable;
