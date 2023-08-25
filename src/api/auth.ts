import api from '../core/api';

const baseUrl = process.env.NEXT_PUBLIC_APPHOST || ''

const login = (payload: any): Promise<any> => {
  const { post } = api({ baseUrl });

  return post('/api/login', payload);
}

const register = (payload:any) => {
  const { post } = api({ baseUrl });

  return post('/api/register', payload);
}

const authApi = { login, register };
export default authApi;

