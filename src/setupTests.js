// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJxCfY2VEwKVdBAHY1Chsts9NKJomSPro",
  authDomain: "authdemo-8de3e.firebaseapp.com",
  projectId: "authdemo-8de3e",
  storageBucket: "authdemo-8de3e.appspot.com",
  messagingSenderId: "599976159637",
  appId: "1:599976159637:web:c2a632fcb027ee80b06e9c",
  measurementId: "G-CCWWJBNLMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

