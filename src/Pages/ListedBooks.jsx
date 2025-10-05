import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../Component/ReadList/ReadList';
import WishList from '../Component/WishList/WishList';
import { useContext, useEffect, useState } from 'react';
import BooksProvider from '../BooksProvider/BooksProvider';
import { getStoredBook } from '../utility/addToDB';

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const { booksData } = useContext(BooksProvider);
  console.log(booksData);

  useEffect(() => {
    const storedBookData = getStoredBook();
    console.log(storedBookData);
    const myReadList = booksData.filter(book =>
      storedBookData.includes(book.bookId)
    );
    console.log(myReadList);
    setReadList(myReadList);
  }, [booksData]);

  return (
    <div className="mt-6 min-h-[80vh]">
      <div className="h-28 bg-[rgba(19,19,19,0.05)]">
        <div className="flex items-center justify-center h-full">
          <h2 className="text-3xl font-bold">Books</h2>
        </div>
      </div>
      <select className="mx-auto block px-2 border rounded-lg bg-green-500 text-white py-3 mt-6 mb-16 outline-none">
        <option disabled value="">
          Sort By
        </option>
        <option value="rating">Rating</option>
        <option value="pages">Number of Pages</option>
        <option value="publisher">Publisher Year</option>
      </select>

      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>WishList</Tab>
          </TabList>
          <div className="my-8">
            <TabPanel>
              <ReadList readList={readList} />
            </TabPanel>
            <TabPanel>
              <WishList />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
