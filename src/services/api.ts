import axios, { 
  AxiosError,
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse, 
  InternalAxiosRequestConfig,
} from 'axios';

const headers: AxiosRequestConfig['headers'] = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  Expires: '0',
};

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  headers,
  timeout: 60000,
});

instance.interceptors.request.use(
  async (request: AxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const requestHeaders = request.headers || {}; 

    return {
      ...request,
      headers: requestHeaders,
    } as InternalAxiosRequestConfig; 
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);

export default instance;