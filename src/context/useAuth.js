import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { loginAPI, registerAPI } from "../services/AuthService";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (auth, email, name, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        const userObj = {
          name: res.user.displayName,
          email: res.user.email,
        };
        setUser(userObj);
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        toast.success("Registration Success!");
        navigate("/home");
      }
    } catch (error) {
      toast.warning("Server error occurred");
    }
  };

  const loginUser = async (auth, email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("token", res.user.accessToken);
      const userObj = {
        name: res.user.displayName,
        email: res.user.email,
      };
      setToken(res.user.accessToken);
      setUser(userObj);
      toast.success("Login Success!");
      navigate("/home");
    } catch (error) {
      toast.warning("Server error occurred");
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
    setUser(null);
    setToken(null);
    navigate("/signin");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        registerUser,
        loginUser,
        logout,
        isLoggedIn,
        loginGoogleUser,
      }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
