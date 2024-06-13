import { HttpsAgent } from 'agentkeepalive';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';

import { LoginRequest, LoginResponse, login } from './auth';
import { getAuthToken } from './client-storage';

export const defaultHttpsAgent = new HttpsAgent({ keepAlive: true });
export const defaultTimeout = 40000;

export const defaultConfig: AxiosRequestConfig = {
  timeout: defaultTimeout,
  httpAgent: defaultHttpsAgent,

  headers: {},
};

export const defaultAxiosInstance = axios.create(defaultConfig);
axiosRetry(defaultAxiosInstance);

defaultAxiosInstance.interceptors.request.use(
  (request) => {
    const modifiedRequest: AxiosRequestConfig = { ...request };
    const accessToken: string = getAuthToken() || '';

    modifiedRequest.headers = modifiedRequest.headers || {};
    modifiedRequest.headers.Authorization = `Bearer ${accessToken}`;

    console.log('API call to this URL:', modifiedRequest.url);

    return modifiedRequest as InternalAxiosRequestConfig<unknown>;
  },
  (error: AxiosError) => {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
);

defaultAxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error.response ? error.response.data : error);
  }
);

export type Config = {
  raxConfig?: IAxiosRetryConfig;
} & AxiosRequestConfig;

export interface ClientOptions {
  axiosInstance?: AxiosInstance;
  config?: Config;
}

export className Client {
  private axiosInstance: AxiosInstance;

  constructor({ axiosInstance, config }: ClientOptions = {}) {
    if (axiosInstance && config) {
      throw new Error('Provide one of axiosInstance or config.');
    }
    if (axiosInstance) {
      this.axiosInstance = axiosInstance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.axiosInstance.defaults.headers = {
        ...defaultConfig.headers?.common,
        ...this.axiosInstance.defaults.headers,
      };
    } else if (config) {
      const { headers, ...restConfig } = config;
      const mergedConfig = {
        ...defaultConfig,
        ...restConfig,
        headers: { ...defaultConfig.headers, ...headers },
      };
      this.axiosInstance = axios.create(mergedConfig);
      axiosRetry(this.axiosInstance);
    } else {
      this.axiosInstance = defaultAxiosInstance;
    }
  }

  login(request: LoginRequest): Promise<LoginResponse> {
    return login(request, this.axiosInstance);
  }
}

export const apiClient = new Client();
