import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default RootLayout;
