//LinkButton
import React, { JSXElementConstructor } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  btnId: string;
}

const LinkButton: JSXElementConstructor<LinkButtonProps> = (props) => {
  return (
    <Link to={"/" + props.btnId}>
      <button id={props.btnId} className="LoginButton">
        {props.btnId}
      </button>
    </Link>
  );
};

export default LinkButton;
