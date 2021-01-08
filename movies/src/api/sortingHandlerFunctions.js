export const SORTING_HANDLER_FUNCTIONS = {
    releaseDate: (movie1, movie2) =>  movie1.releaseDate - movie2.releaseDate,
    rating: (movie1, movie2) =>  movie1.rating - movie2.rating,
};