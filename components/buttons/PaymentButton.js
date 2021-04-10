import PropTypes from 'prop-types';
import { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { STRIPE_PUBLISHED_KEY, API_DOMAIN } from '@/config/globals';
import AuthContext from '@/context/AuthContext';

const stripePromise = loadStripe(STRIPE_PUBLISHED_KEY);

const PaymentButton = ({ order }) => {
  const { getToken } = useContext(AuthContext);

  const handlePayment = async () => {
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
    });
  };

  return (
    <button
      onClick={handlePayment}
      className="flex flex-row flex-nowrap items-center justify-center font-bold px-4 py-3 rounded-lg bg-accent text-base shadow hover:bg-inactive hover:text-primary"
    >
      Continuar al pago
    </button>
  );
};

PaymentButton.propTypes = {
  order: PropTypes.array
};

PaymentButton.default = {
  order: []
};

export default PaymentButton;
