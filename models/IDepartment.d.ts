import ICategory from "./ICategory";
import IProduct from "./IProduct";

export default interface IDepartment {
  id?: string;
  slug?: string;
  name?: string;
  categories?: Array<ICategory>;
  products?: Array<IProduct>;
};
