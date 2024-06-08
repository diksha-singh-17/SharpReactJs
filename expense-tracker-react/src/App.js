import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Profile from "./components/Profile";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
    { path: "/profile", element: <Profile /> },
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
