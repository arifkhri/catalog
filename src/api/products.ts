import api from '../core/api';

const getProducts = (): Promise<any> => {
  const { get } = api();

  return get('/products');
}


const getProductDetail = (id: string): Promise<any> => {
  const { get } = api();

  return get(`/products/${id}`);
}

const productsApi = { getProducts, getProductDetail };
export default productsApi;

