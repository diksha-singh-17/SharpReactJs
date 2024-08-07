import { Link } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import classes from "./MainNavigation.module.css";
import { useHistory } from "react-router-dom";

const MainNavigation = () => {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;
  const history = useHistory();

  const logOutHandler = () => {
    authCntxt.logOut();
    history.replace("./auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
