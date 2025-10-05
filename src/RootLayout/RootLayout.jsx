import { Outlet, useLoaderData } from 'react-router';
import Container from '../Component/Container/Container';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import BooksProvider from '../BooksProvider/BooksProvider';

const RootLayout = () => {
  const booksData = useLoaderData();
  return (
    <BooksProvider.Provider value={{ booksData }}>
      <div>
        <header className="lg:py-6 py-4 bg-green-100">
          <Navbar />
        </header>
        <Container>
          <main>
            <Outlet />
          </main>
        </Container>
        <Footer />
      </div>
    </BooksProvider.Provider>
  );
};

export default RootLayout;
