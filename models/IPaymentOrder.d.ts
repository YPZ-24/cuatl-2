import IOffer from "./IOffer";
import IProduct from "./IProduct";
import IVariant from "./IVariant";

export default interface IPaymentOrderItem {
  quantity?: number;
  offers?: Array<IOffer>;
  product?: IProduct;
  total?: number;
  variant?: IVariant;
};
