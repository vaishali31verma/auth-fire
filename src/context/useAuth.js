import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
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

  function getSignInAuthErrorMessage(authCode) {
    if (authCode === "auth/invalid-email") {
      return "Email provided is invalid";
    } else if (authCode === "auth/user-disabled") {
      return "User account has been disabled";
    } else if (authCode === "auth/user-not-found") {
      return "No user found with the provided email";
    } else if (authCode === "auth/wrong-password") {
      return "The password is invalid or the user does not have a password";
    } else if (authCode === "auth/too-many-requests") {
      return "Too many requests. Try again later";
    } else if (authCode === "auth/operation-not-allowed") {
      return "Operation not allowed. Please enable this sign-in method in the Firebase console";
    } else {
      return authCode;
    }
  }

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
        setUser(res.user.providerData[0]);
        localStorage.setItem("token", res.user.accessToken);
        setToken(res.user.accessToken);
        toast.success("Registration Success!");
        navigate("/");
      }
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        toast.warning("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        toast.warning("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        toast.warning("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        toast.warning("The password is too weak.");
      }
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
      setUser(res.user.providerData[0]);
      toast.success("Login Success!");
      navigate("/");
    } catch (error) {
      const errorMessage = getSignInAuthErrorMessage(error.code);
      toast.warning(errorMessage);
    }
  };

  const loginGoogleUser = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      if (res) {
        localStorage.setItem("token", res.user.accessToken);

        setToken(res.user.accessToken);
        setUser(res.user.providerData[0]);
        toast.success("Login Success!");
        navigate("/");
      }
    } catch (error) {
      const errorMessage = getSignInAuthErrorMessage(error.code);
      toast.warning(errorMessage);
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
