import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";
import { useSelector } from "react-redux";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
    { path: "/profile", element: <Profile /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
  ]);
  const theme = useSelector((state) => state.auth.theme);
  return (
    <div className={theme}>
      <div className="App">
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
