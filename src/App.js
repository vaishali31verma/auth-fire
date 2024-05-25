
import "./App.css";
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
