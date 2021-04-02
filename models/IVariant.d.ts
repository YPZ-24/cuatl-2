import { IOrder } from "./IOrder";

export default interface IVariant {
  id?: string;
  active?: boolean;
  color?: string;
  name?: string;
  pattern?: string;
  productId?: string;
  size?: string;
  slug?: string;
  stock?: number;
};
