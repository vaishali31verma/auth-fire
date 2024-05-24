import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Components/auth/SignIn";
import SignUp from "../Components/auth/SignUp";
import Home from "../pages/Home";
import ProtectedRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "", element: <Home /> },
      { path: "signIn", element: <SignIn /> },
      { path: "signUp", element: <SignUp /> },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            {" "}
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "company/:ticker",
        element: <ProtectedRoute>{/* <CompanyPage /> */}</ProtectedRoute>,
      },
    ],
  },
]);
