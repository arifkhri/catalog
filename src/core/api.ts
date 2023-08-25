import fetch, { RequestInit } from 'node-fetch';


interface IAPIConfig {
  user?: {
    accessToken: '';
  };
  baseUrl?: string;
}

const api = (APIConfig?: IAPIConfig) => {
  const { baseUrl: url = '' } = APIConfig;
  const baseUrl = url || process.env.NEXT_PUBLIC_API;
  const authConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
  };

  const get = ( url: string, params?: any): any => {
    const config: RequestInit = { };

    return new Promise((resolved, reject) => {
      try {
        fetch(`${baseUrl}${url}`, config).then((res: any) => {
          if (res.status !== 200 && res.status !== 201) {
            reject(res);
          } else {
            resolved(res.json());
          }
        });
      } catch (e) {
        reject(e);
      }
    });

    return fetch(`${baseUrl}${url}`, config).then((res: any) => res.json());
  };

  return { get };
};

export default api;

