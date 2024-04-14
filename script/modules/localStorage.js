 const getStorage = () => {
  const name = localStorage.getItem('name');
  let tasks = localStorage.getItem(name) || [];
  return tasks;
}

const setStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
};

const removeItemStorage = (name, itemId) => {
  const data = getStorage(name);
  const newData = data.filter(item => item.id !== itemId);
  setStorage(name, newData);
};


export {getStorage, setStorage, removeItemStorage};
