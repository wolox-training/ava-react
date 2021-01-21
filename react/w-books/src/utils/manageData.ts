export const SESSION = 'SESSION';

const saveData = (key: typeof SESSION, value: any) => {
  if (typeof localStorage !== 'undefined') {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }
};

const getData = (key: typeof SESSION) => {
  if (typeof localStorage !== 'undefined') {
    let data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  }
  return null;
};

const deleteData = (key: typeof SESSION) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export { getData, saveData, deleteData };
