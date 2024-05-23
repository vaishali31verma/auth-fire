import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { loginAPI, registerAPI } from "../services/AuthService";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

// Create a context with default values
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email, username, password) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = {
          userName: res.data.userName,
          email: res.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.data.token);
        setUser(userObj);
        toast.success("Registration Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.warning("Server error occurred");
    }
  };

  const loginUser = async (username, password) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = {
          userName: res.data.userName,
          email: res.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.data.token);
        setUser(userObj);
        toast.success("Login Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.warning("Server error occurred");
    }
  };
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // const data = await response.json();
      console.log("data", response);

      // Sign-in successful, do something (e.g., navigate to another page)
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      // Handle error appropriately (e.g., show error message to user)
    }
  };
  const loginGoogleUser = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      if (res) {
        localStorage.setItem("token", res.user.accessToken);
        const userObj = {
          name: res.user.displayName,
          email: res.user.email,
        };
        // localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.user.accessToken);
        setUser(userObj);
        toast.success("Login Success!");
        navigate("/home");
      }
    } catch (error) {
      toast.warning("Server error occurred");
    }
  };
  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, loginUser, logout, isLoggedIn }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
