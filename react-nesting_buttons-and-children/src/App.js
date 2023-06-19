import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>This is a 1st Button!</Button>
      <Button>This is a 2nd Button!</Button>
      <Button>This is a 3rd Button!</Button>
      <Button>This is a 4th Button!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
