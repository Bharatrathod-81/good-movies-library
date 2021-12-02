import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  Action: [
    { name: "Bangbang", rating: "5/5" },
    { name: "ironman", rating: "5/5" }
  ],
  comedy: [
    { name: "Golmaal", rating: "4.5/5" },
    { name: "Dhamaal", rating: "4.5/5" }
  ],
  romance: [
    { name: "Hosana", rating: "4/5" },
    { name: "Arjun Reddy", rating: "5/5" }
  ]
};

export default function App() {
  var [selectedgenre, setGenre] = useState("Action");

  function catchaclick(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📽good moviesDB</h1>
      <p>Checkout my favorite moviesDB. Select a genre to get started</p>
      {Object.keys(moviesDB).map((genre) => {
        return (
          <button
            style={{
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "0.5rem"
            }}
            onClick={() => catchaclick(genre)}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedgenre].map((movie) => {
            return (
              <li
                keys={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div>{movie.name}</div>
                <div>{movie.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
