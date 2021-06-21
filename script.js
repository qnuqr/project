"use strict";

const numberOfFilms = +prompt('сколько фильмов ты посмотрел?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false  
};

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '' ),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '' );

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);
