import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };

  const navbarData = [
    {
      title: "Home",
      href: "/",
      cname:
        "border-t font-medium w-full flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto text-white",
    },
    {
      title: "About",
      href: "/about",
      cname:
        "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto text-white",
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#2198D5] items-center flex p-4 z-10">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <h1 className="text-xl text-white font-bold cursor-pointer">Logo</h1>

        <button
          className="flex justify-end md:hidden ring-1 ring-white rounded text-white p-2"
          onClick={showNav}
        >
          ☰
        </button>
        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link to={link.href} onClick={showNav}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={logout}
          className={`${
            toggle ? " flex" : " hidden"
          } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}
        >
          Signout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
