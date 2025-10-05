const getStoredBook = () => {
  //getting book from the local storage
  const storedBooksStr = localStorage.getItem('readList');
  //book exist then parse the json
  if (storedBooksStr) {
    const storedBookData = JSON.parse(storedBooksStr);
    return storedBookData;
  }
  //otherwise return []
  return [];
};

const addToStoredDB = id => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) return;
  storedBookData.push(String(id));
  const data = JSON.stringify(storedBookData);
  localStorage.setItem('readList', data);
  // console.log(typeof data[0]);
};
export { addToStoredDB, getStoredBook };
