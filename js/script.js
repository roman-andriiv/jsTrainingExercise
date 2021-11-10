"use strict";



//#1
const numberOfFilms = +prompt("How many films have you already seen?", "");

//#2
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//#3
const a = prompt("What is one of the last films you watched?", ""),
      b = prompt("How much would you rate it?", ""),
      c = prompt("What is one of the last films you watched?", ""),
      d = prompt("How much would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



