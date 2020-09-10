import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
import { actionTypes } from "../ContextApi/reducer";
import { provider, auth } from "../firebase";
import { useStateValue } from "../ContextApi/StateProvider";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to ChatRoom</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;