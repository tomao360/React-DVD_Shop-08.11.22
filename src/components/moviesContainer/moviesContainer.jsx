import { React, useState } from "react";
import { compare } from "../../helpers/helper";
import { getMoviesFromServer } from "../../services/moviesServices";
import { TableContent } from "../tableContent/tableContent";
import "./style.css";

let moviesFromDb = getMoviesFromServer().sort((a, b) => compare(a, b)); //Get the data from the database  //moviesFromDb is an array of movies //It is customary to put data received from the server outside the component

export const MoviesContainer = (props) => {
  const [movies, setMovies] = useState(moviesFromDb);

  const handleDelete = (id) => {
    let newData = movies.filter((m) => m.id !== id);
    newData = newData.sort((a, b) => compare(a, b));
    setMovies(newData);
  };

  const handleIsLike = (id, isLike) => {
    //Get movie by id with .find function
    let movie = movies.find((m) => m.id === id);
    //Check if the movie exist in the array (make sure that the movie not equals to null or undefind)
    if (movie) {
      //Change the status of isLike
      movie.isLike = isLike;
    }
    //Get all the movies that not affected (not equals to the id parameter)
    let moviesWithoutId = movies.filter((m) => m.id !== id);
    //Create a new array that containes the movies and the new movie that was edited. sort this array by id
    let newData = [...moviesWithoutId, movie].sort((a, b) => compare(a, b));
    //With the function setMovies I insert the new data (the new array with the liked movie) into movies array (line 13) and the function TableContent will get this array
    setMovies(newData);
  };
  return (
    <div>
      <h1>DVD Shop</h1>
      <h3>Showing {movies.length} movies in the database of the shop</h3>
      <TableContent
        moviesArr={movies}
        handleLike={handleIsLike}
        handleDelete={handleDelete}
      ></TableContent>
      {/*This is how I pass its values to the TableContent function*/}
    </div>
  );
};
