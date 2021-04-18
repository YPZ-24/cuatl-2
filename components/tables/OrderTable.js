import PropTypes from 'prop-types';
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, IconButton} from '@material-ui/core'
import IconDelete from '@material-ui/icons/Delete'

const OrderTable = ({ order, removeProduct}) => {

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component = "th">QUITAR</TableCell>
            <TableCell component = "th">PRODUCTO</TableCell>
            <TableCell component = "th">COLOR</TableCell>
            <TableCell component = "th">TAMAÑO</TableCell>
            <TableCell component = "th">PRECIO</TableCell>
            <TableCell component = "th">CANTIDAD</TableCell>
            <TableCell component = "th">FINAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((orderItem, itemNumber) => (
              <TableRow key={itemNumber}>
                <TableCell>
                  <IconButton onClick={()=>{}}>
                    <IconDelete/>
                  </IconButton>
                </TableCell>
                <TableCell>{orderItem.product.name}</TableCell>
                <TableCell>{orderItem.variant.color}</TableCell>
                <TableCell>{orderItem.variant.size}</TableCell>
                <TableCell>{orderItem.product.price}</TableCell>
                <TableCell>{orderItem.quantity}</TableCell>
                <TableCell>{orderItem.product.price*orderItem.quantity}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

OrderTable.propTypes = {
  order: PropTypes.array
};

OrderTable.defaultProps = {
  order: []
};

export default OrderTable;
