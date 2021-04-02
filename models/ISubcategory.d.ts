import IProduct from "./IProduct";

export default interface ISubcategory {
  name?: string;
  products?: Array<IProduct>;
  slug?: string;
};
