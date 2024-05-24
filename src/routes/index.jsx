import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Components/auth/SignIn";
import SignUp from "../Components/auth/SignUp";
import Home from "../pages/Home";
import ProtectedRoute from "./PrivateRoute";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "signIn", element: <SignIn /> },
      { path: "signUp", element: <SignUp /> },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            {" "}
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            {" "}
            <About />{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
