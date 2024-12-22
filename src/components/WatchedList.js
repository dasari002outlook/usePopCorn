import React from "react";
import WatchedMovie from "./WatchedMovie";

export default function WatchedList({ watched }) {
  return (
    <div>
      {" "}
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
