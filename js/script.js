"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you already seen?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you already seen?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("What is one of the last films you watched?", ""),
            b = prompt("How much would you rate it?", "");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done!");
        } else {
            console.log("Error!");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Few films watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a film fan");
    } else {
        console.log("Error!");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre #${i} is?`);
    }
}
writeYourGenres();