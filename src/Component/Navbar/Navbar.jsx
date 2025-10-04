import Container from '../Container/Container';

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="dropdown pt-1">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base gap-2"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Listed Books</a>
              </li>
              <li>
                <a>Pages To Read</a>
              </li>
              <li>
                <a className="btn btn-success w-24">Sign In</a>
              </li>
              <li>
                <a className="btn btn-info w-24">Sign Up</a>
              </li>
            </ul>
          </div>
          <a className="md:text-2xl text-xl">Book Vibe</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 text-base">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages To Read</a>
            </li>
          </ul>
        </div>
        <div className="items-center gap-4 hidden lg:flex">
          <a className="btn  btn-success">Sign In</a>
          <a className="btn btn-info">Sign Up</a>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
