'use client';

import { canUseDOM } from '../utils';

export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  if (canUseDOM()) {
    document.cookie = `${cname}=${cvalue};${expires};path=/;domain=.softyoi.com`;
  }
};

export const getCookie = (cname: string) => {
  if (canUseDOM()) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i += 1) {
      const c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return '';
};
