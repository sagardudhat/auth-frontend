import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { defaultAxiosInstance } from './client';
import {
  LoginRequestData,
  LoginResponseData,
} from './types';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL_V1 || '';

export interface LoginRequest extends Partial<AxiosRequestConfig> {
  params: LoginRequestData;
}

export interface LoginResponse extends AxiosResponse {
  data: LoginResponseData;
}

export function login(
  {
    params,
    url = `${baseURL}/auth/login`,
    method = 'post',
    ...config
  }: LoginRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<LoginResponse> {
  return axiosInstance({
    data: params,
    url,
    method,
    ...config,
  });
}
