import logo from './logo.svg';
import './App.css';
import GoogleAuth from './GoggleAuth';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import AuthDetails from './Components/AuthDetail';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;
