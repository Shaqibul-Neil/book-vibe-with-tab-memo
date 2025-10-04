import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import PagesToRead from '../Pages/PagesToRead';
import BookDetails from '../Pages/BookDetails';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    loader: async () => {
      const res = await axios.get('/booksData.json'); //alwz axios use kro. noito book details page e single book e gele reload dile data harae jai
      return res.data;
    },
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },

      { path: '/listed-books', Component: ListedBooks },
      { path: '/pages-to-read', Component: PagesToRead },
      {
        path: '/book-details/:title',
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
