interface IAPIConfig {
  baseUrl?: string;
}

const api = (APIConfig?: IAPIConfig) => {
  const { baseUrl: url = '' } = APIConfig || {};
  const baseUrl = url || process.env.NEXT_PUBLIC_API;

  const get = ( url: string, params: any = ''): any => {
    const config: RequestInit = { };

    return new Promise((resolved, reject) => {
      try {
        fetch(`${baseUrl}${url}${new URLSearchParams(params).toString()}`, config).then((res: any) => {
          if (res.status !== 200) {
            reject(res);
          } else {
            resolved(res.json());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  return { get };
};

export default api;

