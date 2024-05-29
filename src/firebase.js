import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAJxCfY2VEwKVdBAHY1Chsts9NKJomSPro",
  authDomain: "authdemo-8de3e.firebaseapp.com",
  projectId: "authdemo-8de3e",
  storageBucket: "authdemo-8de3e.appspot.com",
  messagingSenderId: "599976159637",
  appId: "1:599976159637:web:c2a632fcb027ee80b06e9c",
  measurementId: "G-CCWWJBNLMV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
