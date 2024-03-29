// This function will pick correct search and filter fields
const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
) => {
  const finalObject: Partial<T> = {};

  for (const key of keys) {
    if (Object.keys(obj).length > 0 && obj.hasOwnProperty(key)) {
      finalObject[key] = obj[key];
    }
  }
  return finalObject;
};

export default pick;
