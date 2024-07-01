import "./App.css";
import SignUp from "./components/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    { path: "/login", element: <SignIn /> },
    { path: "/body", element: <Body /> },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={appRouter}>
          <SignUp />
        </RouterProvider>
      </header>
    </div>
  );
}

export default App;
