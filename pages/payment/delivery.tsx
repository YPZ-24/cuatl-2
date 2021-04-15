import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { API_DOMAIN } from '@/config/globals';
import AuthContext from '@/context/AuthContext';

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const token = await getToken();
          const response = await fetch(`${API_DOMAIN}/orders`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const orders = await response.json();

          setOrders(orders);
        } catch (error) {
          setOrders([]);
        }
      }
    };

    fetchOrders();
  }, [user]);

  return orders;
};

export default function BagPage() {
  const { user, getToken } = useContext(AuthContext);
  const router = useRouter();
  const orders = useOrders(user, getToken);

  useEffect(() => {
    if (!user) {
      router.push('/sign_in');
    }
  }, []);

  return (
    <>
      {orders
        ? orders.map(order => (
          <div key="order.id">
            {new Date(order.createdAt).toLocaleDateString('es-MX')}
            {order.product.name}
            {order.total}
            {order.status}
          </div>))
        : (<div>Sin órdenes</div>)
      }
    </>
  );
};
