import api from '../core/api';

const getProducts = (): Promise<any> => {
  const { get } = api();

  return get('/products');
}


const getProductDetail = (url: string): Promise<any> => {
  const { get } = api();

  return get(url);
}

const productsApi = { getProducts, getProductDetail };
export default productsApi;

