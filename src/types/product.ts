export type ProductCategories = Array<string>

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  id: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail:  string;
  name:  string;
  detail_product: IDetailProduct[];
  variants: IVariant[];
}

export interface IVariantValue {
  image: string;
  label: string;
  option_value: string;
}

export interface IVariant {
  attribute_id: string;
  id: number;
  label: string
  product_id: number;
  values: IVariantValue[]
}

export interface IDetailProduct {
  label: string;
  description: string;
}
