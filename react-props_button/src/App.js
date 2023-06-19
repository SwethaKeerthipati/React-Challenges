import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Clikced the Button");
  }
  return (
    <Button
      color={"grey"}
      disabled={false}
      text={"My Button props"}
      handleClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, handleClick }) {
  return (
    <button
      style={{ backgroundColor: color, color: "blue" }} //color ,backgroundcolor
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
