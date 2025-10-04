import { Outlet } from "react-router";
import Container from "../Component/Container/Container";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Container>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
      <footer className="bg-base-300 h-32">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
