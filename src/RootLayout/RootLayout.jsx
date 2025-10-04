import { Outlet } from 'react-router';
import Container from '../Component/Container/Container';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <header className="py-4 bg-green-100">
        <Navbar />
      </header>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
