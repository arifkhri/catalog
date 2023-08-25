import api from '../core/api';

const baseUrl = process.env.NEXT_PUBLIC_APPHOST || ''

const create = (payload: any): Promise<any> => {
  const { post } = api({ baseUrl });

  return post('/api/shipping', payload);
}

const update = (payload:any) => {
  const { patch } = api({ baseUrl });

  return patch('/api/register', payload);
}

const authApi = { create, update };
export default authApi;

