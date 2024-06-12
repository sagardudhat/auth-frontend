'use client';

export const isObject = (value: unknown) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

export const markStates = (
  sobj: Record<string, unknown>,
  self: Record<string, unknown>
) => {
  if (!isObject(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object');
  }
  const selfKeys = Object.keys(self);

  Object.entries(sobj).forEach(([key, val]) => {
    if (!selfKeys.includes(key)) return false;
    if (!Array.isArray(val) && isObject(val) && self[key] !== null) {
      // eslint-disable-next-line no-param-reassign
      self[key] = Object.assign(self[key] as object, val);
    } else {
      // eslint-disable-next-line no-param-reassign
      self = Object.assign(self, { [key]: val });
    }
  });

  return false;
};
