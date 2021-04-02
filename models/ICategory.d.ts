import IProduct from "./IProduct";
import ISubcategory from "./ISubcategory";

export default interface ICategory {
  name?: string;
  products?: Array<IProduct>;
  slug?: string;
  subcategories?: Array<ISubcategory>;
};
