import { IParams, IData } from "./list";

export type ProductCategories = Array<string>
export interface IProductsParams extends IParams {
  category?: string;
}

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: string;
  id: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail:  string;
  name:  string;
}
export interface IProducts extends IData {
  products: IProduct[]
};
