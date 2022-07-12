//Login
import React, { JSXElementConstructor } from "react";
import LoginButtons from "../LoginButtons/LoginButtons";
import LinkButton from "../LinkButton/LinkButton";
import InputFields from "../InputFields/InputFields";
import App from "../FirebaseInitialize/FirebaseInitialize";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const auth = getAuth(App);
export function login(): void {
  const email: string = (document.getElementById("email") as HTMLInputElement)
    .value;
  const password: string = (
    document.getElementById("password") as HTMLInputElement
  ).value;
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

interface LoginProps {}

const Login: JSXElementConstructor<LoginProps> = () => {
  return (
    <div className="Login-Container">
      <h1 className="Signup-Title">Welcome Back!</h1>
      <div className="Input-Container">
        <InputFields inputType={"email"} />
        <InputFields inputType={"password"} />
      </div>
      <div className="Input-Button-Container">
        <LoginButtons btnFunction={login} btnId={"login"} />
        <LinkButton btnId={"signup"} />
      </div>
    </div>
  );
};

export default Login;
