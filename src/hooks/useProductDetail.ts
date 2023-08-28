import useSWR from "swr";

import {product} from "../api/index";
import { IProduct } from "../types/product";

export default function useProductDetail (id: string) {
  const { data, error, isLoading } = useSWR<IProduct>(id ? `/products/${id}` : null, product.getProductDetail)

  return {
    data,
    isLoading,
    error
  }
}
