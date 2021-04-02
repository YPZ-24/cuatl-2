import { createContext, useState } from "react";

import IOrder from "@/models/IOrder";
import IPaymentOrder from "@/models/IPaymentOrder";

//: use this context whenever you want to access the OrderProvider
const OrderContext = createContext(null);

export default OrderContext;
export { OrderProvider };

//: use this component in all the other components where you want to access
//: the global state of a user order
function OrderProvider({ children }) {
  const [order, setOrder] = useState<IOrder>(null);

  const countProducts = (): number => {
    return order ? order.variants.length : 0;
  };

  const addOrderItem = (item: IPaymentOrder) => {
  };

  //: use this function to add a new item to the order in local storage
  const setOrderItemInLS = (activeOrder: Array<IPaymentOrder>) => {
    localStorage.setItem('orderItems', JSON.stringify(activeOrder));
  };

  //: use this function to get the current order object from local storage
  const getOrderItemFromLS = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('orderItems')) || [];
    } catch (_error) {
      console.error((_error as SyntaxError).message);
      return null;
    }
  };

  return (
    <OrderContext.Provider value={{ order, countProducts }}>
      {children}
    </OrderContext.Provider>
  );
};
