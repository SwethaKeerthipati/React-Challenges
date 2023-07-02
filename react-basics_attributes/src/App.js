import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Title of the Article</h2>
      <label htmlFor="inputField">Input:</label>
      <input type="text" id="inputField" />
      <a className="article__link" href="https://www.google.de/maps">
        Link to Google
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
