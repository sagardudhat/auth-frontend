import { getAuthToken } from '../services/client-storage';

export function classNameNames(...classNamees: string[]) {
  return classNamees.filter(Boolean).join(' ');
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
