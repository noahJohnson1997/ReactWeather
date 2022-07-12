//Signup
import React, { JSXElementConstructor } from "react";
import { Link } from "react-router-dom";
import InputFields from "../InputFields/InputFields";
//initialize firebase and get authorization modules to create a user
import App from "../FirebaseInitialize/FirebaseInitialize";
import {
  getAuth,
  setPersistence,
  createUserWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
const auth = getAuth(App);

//Function to create new user
export function createNewUser(): void {
  const email: string = (document.getElementById("email") as HTMLInputElement)
    .value;
  const password: string = (
    document.getElementById("password") as HTMLInputElement
  ).value;
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      createUserWithEmailAndPassword(auth, email, password)
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

interface SignupProps {}

const Signup: JSXElementConstructor<SignupProps> = () => {
  return (
    <div className="Login-Container">
      <h1 className="Signup-Title">Welcome to my App!</h1>
      <InputFields inputType={"email"} />
      <InputFields inputType={"password"} />
      <Link to="/">
        <button onClick={createNewUser} id="signup" className="LoginButton">
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Signup;
