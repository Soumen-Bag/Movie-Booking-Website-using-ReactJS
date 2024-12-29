import React from "react";
import "../Button/Button.css";
const Button = ({ className, label, onClick ,active }) => {
  const classNames = active ? "date-button-active "+className : className
  return (
    <button className={classNames} onClick={onClick} type="button" >
      {label}
    </button>
  );
};

export default Button;
