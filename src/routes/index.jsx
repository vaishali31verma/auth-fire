import { createBrowserRouter } from "react-router-dom";
// import CompanyPage from "../Pages/CompanyPage/CompanyPage";
// import SearchPage from "../Pages/SearchPage/SearchPage";
// import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
// import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
// import DesignGuide from "../Pages/DesignGuide/DesignGuide";
// import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
// import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend";
// import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";
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
      { path: "", element: <Home /> },
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
