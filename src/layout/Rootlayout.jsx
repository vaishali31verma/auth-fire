import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
