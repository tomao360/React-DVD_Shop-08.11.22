import React from "react";
import "./filterComponent.css";

export const FilterComponent = ({ handleFilter, filter }) => {
  const filterClass = (movieGenre) => {
    if (movieGenre === "All Movies") {
      if (filter === undefined || filter === "All Movies") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    } else if (movieGenre === "Action") {
      if (filter === "Action") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    } else if (movieGenre === "Drama") {
      if (filter === "Drama") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    } else if (movieGenre === "Comedy") {
      if (filter === "Comedy") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    }
  };
  return (
    <div>
      <ul className="list-group">
        <li className={filterClass("All Movies")} aria-current="true">
          <button
            onClick={() => {
              handleFilter("All Movies");
            }}
          >
            All Movies
          </button>
        </li>
        <li className={filterClass("Action")}>
          <button
            onClick={() => {
              handleFilter("Action");
            }}
          >
            Action
          </button>
        </li>
        <li className={filterClass("Drama")}>
          <button
            onClick={() => {
              handleFilter("Drama");
            }}
          >
            Drama
          </button>
        </li>
        <li className={filterClass("Comedy")}>
          <button
            onClick={() => {
              handleFilter("Comedy");
            }}
          >
            Comedy
          </button>
        </li>
      </ul>
    </div>
  );
};
