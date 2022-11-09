//The server will enter this data
const moviesDB = [
  {
    id: 1,
    title: "Batman",
    genre: "Action",
    stock: 5,
    rate: 10,
    isLike: false,
  },
  {
    id: 2,
    title: "Ironman",
    genre: "Action",
    stock: 8,
    rate: 10,
    isLike: false,
  },
  {
    id: 3,
    title: "Spiderman",
    genre: "Action",
    stock: 7,
    rate: 10,
    isLike: false,
  },
  {
    id: 4,
    title: "Avengers Endgame",
    genre: "Action",
    stock: 9,
    rate: 10,
    isLike: false,
  },
  { id: 5, title: "Hulk", genre: "Action", stock: 5, rate: 6, isLike: false },
];

//This function gets data from the server
//I want to export this
export const getMoviesFromServer = () => {
  //Get from server, take time
  return moviesDB;
};
