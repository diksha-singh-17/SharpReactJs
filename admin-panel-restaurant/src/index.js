import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Orders from "./components/Orders";
import Dashboard from "./components/Dashboard";
import appStore from "./store/AppStore";
import { Provider } from "react-redux";
import ForgotPassword from "./components/ForgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
