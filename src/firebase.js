import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp0YagVgeNQXpmQCV7qyzEZ8DwquGj3h4",
  authDomain: "auth-example-24715.firebaseapp.com",
  projectId: "auth-example-24715",
  storageBucket: "auth-example-24715.appspot.com",
  messagingSenderId: "766819906578",
  appId: "1:766819906578:web:f5a08923573a3e6dd594cb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
