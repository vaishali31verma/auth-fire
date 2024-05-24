import { useAuth } from "../context/useAuth";
import React from "react";

const Home = () => {
  const { logout,user } = useAuth();

  console.log(user,"user");
  return <div>{user && user?.name}</div>;
};

export default Home;
