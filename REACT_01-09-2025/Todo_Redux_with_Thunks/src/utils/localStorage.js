/**
 *
 * @param {String} key
 *
 */
const loadData = (key) => {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  return data;
};

/**
 *
 * @param {String, any} (key, data)
 *
 */
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 *
 * @param {String} key
 *
 */
const removeData = (key) => {
  localStorage.removeItem(key);
};

export { loadData, saveData, removeData };
