import React, { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/AuthContext";
import { useHistory } from "react-router-dom";
const ProfileForm = () => {
  const enteredNewPassword = useRef();
  const authCntxt = useContext(AuthContext);
  const history = useHistory();

  const SubmitHandler = (event) => {
    const newpassword = enteredNewPassword.current.value;
    event.preventDefault();
    const token = authCntxt.token;
    console.log(token);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAo7xmAFa3rvDjDEFnZ9VoSTT1Kb7hfK6I",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newpassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        history.replace("./");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          minLength="3"
          id="new-password"
          ref={enteredNewPassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
