export const SESSION = 'SESSION';

export const saveData = (key: typeof SESSION, value: any) => localStorage.setItem(key, JSON.stringify(value));

export const getData = (key: typeof SESSION) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const deleteData = (key: typeof SESSION) => localStorage.removeItem(key);

export const hasData = (key: typeof SESSION):boolean => (localStorage.getItem(key) !== null);