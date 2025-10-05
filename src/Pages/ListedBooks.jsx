import { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
  return (
    <div className="mt-6">
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
              <h3 className="text-2xl text-center font-semibold">
                My Read Books list
              </h3>
            </TabPanel>
            <TabPanel>
              <h3 className="text-2xl text-center font-semibold">
                My Wish list
              </h3>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
