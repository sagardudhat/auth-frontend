import { getCookie, setCookie } from './cookie';

export const setAuthToken = (value: string) =>
  setCookie(
    `authToken${process.env.NEXT_PUBLIC_IS_PRODUCTION || ''}`,
    value,
    1
  );
export const getAuthToken = () =>
  getCookie(`authToken${process.env.NEXT_PUBLIC_IS_PRODUCTION || ''}`) ||
  undefined;
export const removeAuthToken = () =>
  setCookie(`authToken${process.env.NEXT_PUBLIC_IS_PRODUCTION || ''}`, '', 30);

export const cleanCookiesStorage = () => {
  removeAuthToken();
};
