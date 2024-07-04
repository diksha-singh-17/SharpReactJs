import "./App.css";
import SignUp from "./components/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Message from "./components/Message";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Inbox /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/body", element: <Body /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/message/:id", element: <Message /> },
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
