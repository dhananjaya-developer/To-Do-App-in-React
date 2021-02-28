import { useState } from "react";
import Button from "./Task/Button";

const Header = ({ title,text,onClick }) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      {<Button text={text} onClick={onClick} />}
    </header>
  );
};

export default Header;
