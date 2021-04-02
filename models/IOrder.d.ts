import IUser from "./IUser";
import IVariant from "./IVariant";

export enum DELIVERY_STATUS {
  DELIVERED = 'entregada',
  TRAVELING = 'viajando'
};

export enum ORDER_STATUS {
  PAID = 'pagada',
  PENDING = 'pendiente'
};

export default interface IOrder {
  id?: string;
  checkout_session?: string;
  delivery_price?: number;
  delivery_status?: DELIVERY_STATUS;
  status?: ORDER_STATUS;
  subtotal?: number;
  total?: number;
  tracking_number?: string;
  userId?: string;
  variants?: Array<IVariant>;
};
