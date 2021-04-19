import { createContext, useState, useEffect } from "react";
import IPaymentOrder from "@/models/IPaymentOrder";

//: use this context whenever you want to access the OrderProvider
const OrderContext = createContext(null);

export default OrderContext;

export { OrderProvider };

//: use this component in all the other components where you want to access
//: the global state of a user order
function OrderProvider({ children }) {

  const [order, setOrder] = useState<Array<IPaymentOrder>>([]);

  const getOrder = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) { }
    return [];
  };
  
  useEffect(()=>{
    const o = getOrder()
    setOrder(o)
  },[])

  useEffect(()=>{
    saveOrder(order)
  },[order])

  const saveOrder = (order: Array<IPaymentOrder>) => {
    localStorage.setItem('order', JSON.stringify(order));
  };

  const addProductToBag = (variantQuantity:number, product:IPaymentOrder) => {
    const activeOrder = [...order]
   //: if the product and variant is already there
   const indexOfOrderItem = activeOrder.findIndex((orderItem: IPaymentOrder) => orderItem.variant.id === product.variant.id);
   if (indexOfOrderItem !== -1) {
     //: update quantity
     const currentQuantity = activeOrder[indexOfOrderItem].quantity;
     if (currentQuantity + variantQuantity <= product.variant.stock) {
       activeOrder[indexOfOrderItem].quantity = currentQuantity + variantQuantity;
     }
   } else {
     activeOrder.push({
       product: product.product,
       variant: product.variant,
       quantity: variantQuantity,
       offers: product.offers
     });
   }
    setOrder(activeOrder);
  };

  const removeProduct = (itemNumber) => {
      const activeOrder = [...order]
      activeOrder.splice(itemNumber, 1)
      setOrder(activeOrder)
  };

  return (
    <OrderContext.Provider value={{ order, addProductToBag, removeProduct, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
