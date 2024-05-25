import React from "react";
import { useAuth } from "../context/useAuth";

const About = () => {
  const { user } = useAuth();

  return (
    <main className="container h-[calc(100vh-6rem)] mx-auto px-6 py-8 mt-[60px]">
      <section className="bg-white p-6 rounded-lg shadow-lg h-full">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Meet our dedicated professional who leads our team.
        </p>
        <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md">
          <img
            src={
              user.photoURL
                ? user.photoURL
                : "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
            }
            alt={user.displayName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">{user.displayName}</h3>
        </div>
      </section>
    </main>
  );
};

export default About;
