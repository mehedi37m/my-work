import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";

const NavBar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/consulting">Consulting</Link>
      </li>
      <li>
        <Link to="/al-coach">Al Coach</Link>
      </li>
    </>
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto  text-black">
        <div className=" container mx-auto flex justify-items-center items-center justify-between  z-10  bg-opacity-30 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white"
              >
                {navLink}
              </ul>
            </div>
            <div className="flex justify-start">
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img className="h-8" src={logo} alt="" />
                SalesRank.AI
              </Link>

              <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal font-bold px-1">
                  {navLink}
                </ul>
              </div>
            </div>
          </div>

          <div className="border rounded-full font-bold px-6 py-2">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
