import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { API_DOMAIN } from '@/config/globals';
import AuthContext from '@/context/AuthContext';

export default function SuccessPaymentPage() {
  const router = useRouter();
  const { user, useSession } = useContext(AuthContext);

  useSession();

  useEffect(() => {
    const path = router.asPath
    const i = path.search("=")
    const sessionId = path.slice(i+1)

    const confirmOrder = async () => {
      const order = await fetch(`${API_DOMAIN}/orders/confirm`, {
        method: 'POST',
        body: JSON.stringify({ checkout_session: sessionId }),
        headers: { 'Content-Type': 'application/json' }
      });
    };
    
    confirmOrder();
    router.push('/');
  }, []);

  return (
    <div>
      <h1>¡Gracias por tu compra!</h1>
    </div>
  );
};
