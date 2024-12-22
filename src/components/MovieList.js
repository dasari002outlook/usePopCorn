import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies }) {
  return (
    <div>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
