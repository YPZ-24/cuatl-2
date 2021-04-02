import ICategory from "./ICategory";
import IDepartment from "./IDepartment";
import IOffer from "./IOffer";
import ISubcategory from "./ISubcategory";
import IVariant from "./IVariant";

export default interface IProduct {
  id: string;
  active?: boolean;
  categories?: Array<ICategory>;
  cover?: IMedia,
  departments?: Array<IDepartment>;
  description?: string;
  name?: string;
  media?: Array<IMedia>;
  meta_description?: string;
  meta_title?: string;
  offers?: Array<IOffer>;
  price?: number;
  slug?: string;
  subcategories?: Array<ISubcategory>;
  variants?: Array<IVariant>;
};

export interface IMedia {
  url: string;
  [key: string]: any;
};
