import { useContext } from 'react';
import BooksProvider from '../BooksProvider/BooksProvider';
import Book from '../Component/Book/Book';

const Books = () => {
  const { booksData } = useContext(BooksProvider);
  return (
    <div className="mb-24 space-y-8">
      <h2 className="text-4xl text-center font-semibold">Books</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-9 gap-6">
        {booksData.map(book => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Books;

/*data fetch

-----------
1. useEffect and state
const [booksData, setBooksData] = useState([]);
useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooksData(data));
  }, []); // <--- empty array to fetch only once
  console.log(booksData);

-----------
2. const [booksData, setBooksData] = useState([]);
  const bookPromise = fetch('booksData.json').then(res => res.json());

  console.log(bookPromise); returns a promise. then component e map chalaia props e ai promise pathai die receive kore use(bookPromise) krlei data dekha jabe
-----------
3. routes theke loader die
index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('booksData.json'),
        erpor oi Home e gie useLoader use krbo
*/
