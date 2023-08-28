import api from '../core/api';
import { IProductsParams } from '../types/product';

const getProducts = (params: IProductsParams): Promise<any> => {
  const { get } = api();

  return get('/data', params);
}

const productsApi = { getProducts };
export default productsApi;

