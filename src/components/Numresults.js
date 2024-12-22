import React from "react";

export default function Numresults({ movies }) {
  return (
    <div>
      {" "}
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </div>
  );
}
