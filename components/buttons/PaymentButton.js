import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {Button} from '@material-ui/core'

const PaymentButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    router.push('/user/address');
  };

  return (
    <Button onClick={handleClick} variant="contained" color="secondary" fullWidth>
      Continuar la compra
    </Button>
  );
};

PaymentButton.propTypes = {
  order: PropTypes.array
};

PaymentButton.default = {
  order: []
};

export default PaymentButton;
