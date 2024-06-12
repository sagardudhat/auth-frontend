import { getAuthToken } from '../services/client-storage';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export function isAuthorized() {
  const token = getAuthToken();
  if (!token || token === 'null') {
    return false;
  } else {
    return true;
  }
}
