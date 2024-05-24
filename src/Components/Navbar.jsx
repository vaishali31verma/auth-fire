import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { logout,user } = useAuth();
  
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyApp</div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded"
          >
            Contact
          </Link>
          <button
            onClick={logout}
            className="text-white hover:bg-blue-700 px-3 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
