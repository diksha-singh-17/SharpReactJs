import React from "react";
import { useState, useEffect } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthConTextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (loggedInUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loggedInUser = localStorage.getItem("loggedIn");
  const loginHandler = (email, password) => {
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // delete localStorage["loggedIn"];
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
