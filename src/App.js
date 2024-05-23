import logo from "./logo.svg";
import "./App.css";
import GoogleAuth from "./GoggleAuth";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import AuthDetails from "./Components/AuthDetail";
import { UserProvider } from "./context/useAuth";
import RootLayout from "./layout/Rootlayout";

function App() {
  return (
    <UserProvider>
      <RootLayout />
    </UserProvider>
  );
}

export default App;
