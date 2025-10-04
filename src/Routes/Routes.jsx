import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import PagesToRead from '../Pages/PagesToRead';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    loader: () => fetch('booksData.json'),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      { path: '/listed-books', Component: ListedBooks },
      { path: '/pages-to-read', Component: PagesToRead },
    ],
  },
]);

export default router;
