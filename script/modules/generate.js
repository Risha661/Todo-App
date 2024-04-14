const generateRandomId = () => {
  return Math.random().toString().substring(2, 10);
};

  export {generateRandomId};