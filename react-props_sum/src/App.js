import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={60} valueB={40} />;
}

function Sum({ valueA, valueB }) {
  let sum = valueA + valueB;

  return (
    <p>
      <strong>
        {valueA} + {valueB} = {sum}
      </strong>
    </p>
  );
}
