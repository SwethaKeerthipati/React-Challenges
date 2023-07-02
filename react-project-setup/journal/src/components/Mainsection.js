import React from "react";

export default function Mainsection() {
  return (
    <main className="main-section">
      <main>
        <div>
          <h3>Motto</h3>
          <input type="text" placeholder="Title" />
          <h3>Notes</h3>
          <textarea placeholder="Text" />
          <button type="button">Create</button>
        </div>

        <div>
          <div>
            <div>
              <span>All Entries</span>
              <span className="badge"> 3</span>
            </div>

            <div>
              <span>Favorites</span>
              <span className="badge"> 1</span>
            </div>
          </div>
          <ul>
            <li>
              <h3>Thats life in the city</h3>
              <p>26 Feb 2023</p>
              <p>
                That's life in the big city. ... That whole scene, perfect From
                the showing off, the panic, the horrific ... And that movie was
                RoboCop.
              </p>
              <button>Favorite</button>
            </li>
            <li>
              <h3>Thats life in the city</h3>
              <p>29 Mar 2023</p>
              <p>
                That's life in the big city. ... That whole scene, perfect From
                the showing off, the panic, the horrific ... And that movie was
                RoboCop.
              </p>

              <button>Favorite</button>
            </li>
          </ul>
        </div>
      </main>
    </main>
  );
}
