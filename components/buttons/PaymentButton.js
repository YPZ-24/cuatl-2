import PropTypes from 'prop-types';
import { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

import { STRIPE_PUBLISHED_KEY, API_DOMAIN } from '@/config/globals';
import AuthContext from '@/context/AuthContext';
import Button from '@material-ui/core/Button'

const stripePromise = loadStripe(STRIPE_PUBLISHED_KEY);

const PaymentButton = ({ order }) => {
  const { getToken } = useContext(AuthContext);
  const router = useRouter();

  const handleClick = async () => {
    /*
    const stripe = await stripePromise;
    const token = await getToken();

    const response = await fetch(`${API_DOMAIN}/orders`, {
      method: 'POST',
      body: JSON.stringify({ order }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const session = await response.json();
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });*/
    router.push('/user/address');
  };

  return (
    <Button onClick={handleClick} variant="contained" color="primary" fullWidth>
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
