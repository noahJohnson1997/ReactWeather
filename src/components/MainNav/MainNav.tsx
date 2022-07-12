//MainNav
import React, { useState, useEffect, JSXElementConstructor } from "react";
import LoginButtons from "../LoginButtons/LoginButtons";
import { Link, Navigate } from "react-router-dom";

//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import App from "../FirebaseInitialize/FirebaseInitialize";
import { signOut } from "firebase/auth";

const auth = getAuth(App);

interface MainNavProps {}

const MainNav: JSXElementConstructor<MainNavProps> = () => {
  let [uid, setUid] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (auth && user) {
        setUid(user.uid);
      } else {
        setUid("");
      }
    });
  });

  function logout(): void {
    signOut(auth).then(() => {
      setTimeout(() => {
        setUid("");
      }, 200);
    });
  }

  return (
    <div className="MainNav-Container">
      <Link to="/" className="MainNav-Child">
        Signup/Login
      </Link>
      {uid.length > 0 ? (
        <ul className="MainNav">
          <li>
            <Link to="/local" className="MainNav-Child">
              Local
            </Link>
          </li>
          <li>
            <Link to="/search" className="MainNav-Child">
              Search
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      {uid.length > 0 ? (
        <Link to="/">
          <button className="Logout-Button" onClick={logout}>
            logout
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainNav;
