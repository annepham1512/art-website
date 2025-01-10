import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.include(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.include(butttonSize) ? butttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button>{children}</button>
    </Link>
  );
};
