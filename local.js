let store = {};

const getItem = key => (key in store ? store[key] : null);

const getByValue = (lookupValue) => {
  let resultValue;
  store.forEach((key, value) => {
    if (lookupValue === value) {
      resultValue = key;
    }
  });
  return resultValue;
};

const setItem = (key, value) => {
  store[key] = value;
  return true;
};

const removeItem = (key) => {
  const found = key in store;
  if (found) {
    return delete store[key];
  }
  return false;
};

const clear = () => {
  store = {};
  return true;
};

module.exports = {
  getItem,
  getByValue,
  setItem,
  removeItem,
  clear
};
