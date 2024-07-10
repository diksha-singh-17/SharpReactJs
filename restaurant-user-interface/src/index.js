import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./store/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./components/Authentication";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Recipes from "./components/Recipes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
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
