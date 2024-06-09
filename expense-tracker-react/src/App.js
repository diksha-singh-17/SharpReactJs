import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
    { path: "/profile", element: <Profile /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
