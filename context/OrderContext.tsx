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

  const countProducts = (): number => {
    //return order ? order.variants.length : 0;
    return 0
  };

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
    //saveOrder(activeOrder)
  };

  const removeProduct = (itemNumber) => {
      alert("BORRAR")
      const activeOrder = [...order]
      activeOrder.splice(itemNumber, 1)
      setOrder(activeOrder)
      //saveOrder(order)
  };


  /*

  

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
  };*/

  return (
    <OrderContext.Provider value={{ order, countProducts, addProductToBag, removeProduct }}>
      {children}
    </OrderContext.Provider>
  );
};
