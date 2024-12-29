const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const removeData = (key) => {
  localStorage.removeItem(key);
};

export { setData, getData, removeData };