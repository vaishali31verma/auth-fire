import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp0YagVgeNQXpmQCV7qyzEZ8DwquGj3h4",
  authDomain: "auth-example-24715.firebaseapp.com",
  projectId: "auth-example-24715",
  storageBucket: "auth-example-24715.appspot.com",
  messagingSenderId: "766819906578",
  appId: "1:766819906578:web:f5a08923573a3e6dd594cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SignInWithGoogle() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

function SignInWithFacebook() {
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
}

function SignInWithTwitter() {
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button onClick={signInWithTwitter}>Sign in with Twitter</button>
    </div>
  );
}

function SignUpWithEmail() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div style={{ border: "solid black" }}>
      <h1>Sign Up with Email</h1>
      <label>
        Username
        <input
          type="text"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
        />
      </label>
      <br></br>
      <label>
        Password
        <input
          type="text"
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
        />
      </label>
      <button onClick={signUpWithEmail}>Sign Up</button>
    </div>
  );
}

function LoginWithEmail() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div style={{ border: "solid black" }}>
      <h1>Login With Email</h1>
      <label>
        Username
        <input
          type="text"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
        />
      </label>
      <br></br>
      <label>
        Password
        <input
          type="text"
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
        />
      </label>
      <button onClick={loginWithEmail}>Login</button>
    </div>
  );
}

function SignOut() {
  return (
    <button
      onClick={() => {
        signOut(auth);
      }}
    >
      Sign out (from anything)
    </button>
  );
}

function DashBoard() {
  const [user] = useAuthState(auth);
  console.log(user);

  return user ? (
    <div style={{ border: "solid black" }}>
      User Dashboard <br></br>
      Name: {user.displayName} <br></br>
      Email: {user.email} <br></br>
      Photo: <img src={user.photoURL} alt="profile pic" /> <br></br>
    </div>
  ) : (
    <></>
  );
}

export default function GoogleAuth() {
  return (
    <div>
      <SignInWithGoogle />
      <SignInWithFacebook />
      <SignInWithTwitter />
      <div
        style={{ display: "flex", flexFlow: "row", justifyContent: "center" }}
      >
        <SignUpWithEmail />
        <LoginWithEmail />
      </div>
      <DashBoard />
      <SignOut />
    </div>
  );
}
