import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const TableContent = ({ moviesArr, handleLike, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col"></th> {/* An empty column for the like icon */}
          <th scope="col"></th> {/* An empty column for the delete button */}
        </tr>
      </thead>
      <tbody>
        {moviesArr &&
          moviesArr.map((m) => {
            //Map will return a <tr></tr> that contains the data from our array (moviesArr)

            return (
              <tr>
                <td>{m.title}</td>
                <td>{m.genre}</td>
                <td>{m.stock}</td>
                <td>{m.rate}</td>
                <td>
                  {m.isLike ? (
                    <div
                      onClick={() => {
                        handleLike(m.id, false);
                      }}
                    >
                      <FavoriteIcon />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        handleLike(m.id, true);
                      }}
                    >
                      <FavoriteBorderIcon />
                    </div>
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(m.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
