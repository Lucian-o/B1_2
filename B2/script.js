// Script for B2 - Object operations.

    // B2.2: Stores the movie's initial title and release year.
const myMovie = {
    title: "The longest day",
    year: 1964
};

// Displays a copy to preserve the object's initial state in the console.
console.log("Initial movie:", { ...myMovie });