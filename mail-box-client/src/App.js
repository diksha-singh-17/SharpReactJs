import "./App.css";
import SignUp from "./components/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import Body from "./components/Body";
import Inbox from "./components/Inbox";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Inbox /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/body", element: <Body /> },
    { path: "/signup", element: <SignUp /> },
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
