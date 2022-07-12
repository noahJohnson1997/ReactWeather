//LoginButtons
import React, { JSXElementConstructor } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  btnFunction: any;
  btnId: string;
}

export const btnFunctionType = (btnFunction: any): boolean => {
  return typeof btnFunction === "function" ? true : false;
};

const LoginButtons: JSXElementConstructor<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.btnFunction}
      id={props.btnId}
      className="LoginButton"
    >
      {props.btnId}
    </button>
  );
};

export default LoginButtons;
