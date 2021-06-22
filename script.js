"use strict";

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // } 
// // while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if(i === 6) {
//        // break;
//        continue;
//     }
//     console.log(i);
// }


const numberOfFilms = +prompt('сколько фильмов ты посмотрел?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false  
};



for (let i  = 0; i < 2; i++) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '' );

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
       personalMovieDB.movies[a] = b;
       console.log('done');
    } else {
        console.log('error');
        i--;
    }    
}

if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error')
}
console.log(personalMovieDB);




